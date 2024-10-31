using AdoPet.Application.Contracts.RealTime;
using AdoPet.RealTime.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace AdoPet.RealTime.Services;

public class ChatService : IChatService
{
    private readonly IHubContext<ChatHub> _hubContext;
    private static readonly Dictionary<string, int> _connections = new();
    private readonly Dictionary<string, List<string>> _messageHistory;
    private readonly Dictionary<string, List<int>> _groups = new();

    public ChatService(IHubContext<ChatHub> hubContext)
    {
        _hubContext = hubContext;
        _messageHistory = new Dictionary<string, List<string>>();
    }

    public void AddConnection(string connectionId, int userId)
    {
        _connections[connectionId] = userId;
    }

    public void RemoveConnection(string connectionId)
    {
        _connections.Remove(connectionId);
    }

    public bool IsUserConnected(int userId)
    {
        return _connections.ContainsValue(userId);
    }

    public string GetConnectionId(int userId)
    {
        return _connections.FirstOrDefault(x => x.Value == userId).Key;
    }

    public async Task AddUserToGroup(int userId, string groupName)
    {
        var connectionId = _connections.FirstOrDefault(x => x.Value == userId).Key;

        if (connectionId != null)
        {
            await _hubContext.Groups.AddToGroupAsync(connectionId, groupName);
            if (!_groups.ContainsKey(groupName))
            {
                _groups[groupName] = new List<int>();
            }
            _groups[groupName].Add(userId);
        }
        else
        {
            throw new Exception("User not connected.");
        }
    }

    public List<int> GetUserIdsInGroup(string groupName)
    {
        return _groups.ContainsKey(groupName) ? _groups[groupName] : new List<int>();
    }

    public async Task<string> StartChatAsync(List<int> userIds)
    {
        if (userIds == null || userIds.Count < 2)
        {
            return await Task.FromResult<string>(null);
        }

        var groupName = GenerateGroupName(userIds[0], userIds[1]);
        if (!_messageHistory.ContainsKey(groupName))
        {
            _messageHistory[groupName] = new List<string>();
        }

        foreach (var userId in userIds)
        {
            await AddUserToGroup(userId, groupName);
        }

        return await Task.FromResult(groupName);
    }

    private string GenerateGroupName(int userId1, int userId2)
    {
        var sortedIds = new List<int> { userId1, userId2 };
        sortedIds.Sort();
        return $"chat_{sortedIds[0]}_{sortedIds[1]}";
    }

    public async Task<List<string>> GetChatHistoryAsync(int userId1, int userId2)
    {
        var groupName = GenerateGroupName(userId1, userId2);
        if (_messageHistory.TryGetValue(groupName, out var messages))
        {
            return await Task.FromResult(messages);
        }

        return null;
    }

    public async Task SendMessageToGroup(string groupName, string message)
    {
        if (_groups.ContainsKey(groupName))
        {
            var userIds = _groups[groupName];
            foreach (var userId in userIds)
            {
                if (IsUserConnected(userId))
                {
                    var connectionId = GetConnectionId(userId);
                    await _hubContext.Clients.Client(connectionId).SendAsync("ReceiveMessage", message);
                }
                else
                {
                    // ToDo? Store the message in a database or in memory for later delivery
                    if (!_messageHistory.ContainsKey(groupName))
                    {
                        _messageHistory[groupName] = new List<string>();
                    }
                    _messageHistory[groupName].Add(message);
                    Console.WriteLine($"User {userId} is not logged in. Message not delivered.");
                }
            }
        }
    }

}
