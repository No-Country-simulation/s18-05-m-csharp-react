using AdoPet.Application.Contracts.RealTime;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;

namespace AdoPet.RealTime.Hubs;

[Authorize]
public class ChatHub : Hub
{
    private readonly IChatService _chatService;

    public ChatHub(IChatService chatService)
    {
        _chatService = chatService;
    }

    public override async Task OnConnectedAsync()
    {
        Console.WriteLine($"Usuario conectado: {Context.ConnectionId}");

        int userId = GetUserIdFromClaims(Context.User);

        _chatService.AddConnection(Context.ConnectionId, userId);

        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception exception)
    {
        Console.WriteLine($"Usuario desconectado: {Context.ConnectionId}, Error: {exception?.Message}");

        _chatService.RemoveConnection(Context.ConnectionId);
        await base.OnDisconnectedAsync(exception);
    }

    private int GetUserIdFromClaims(ClaimsPrincipal user)
    {
        var userIdClaim = user.FindFirst("id");
        if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
        {
            return userId;
        }

        throw new Exception("UserId claim not found.");
    }

    public async Task<string> StartChatAsync(List<int> userIds)
    {
        var groupName = await _chatService.StartChatAsync(userIds);

        if (groupName != null)
        {
            foreach (var userId in userIds)
            {
                await _chatService.AddUserToGroup(userId, groupName);
            }
        }

        return groupName;
    }

    public async Task SendMessageToGroup(string groupName, string message)
    {
        await Clients.Group(groupName).SendAsync("ReceiveMessage", message);

        // Add logic to handle logged out users
        var userIds = _chatService.GetUserIdsInGroup(groupName);
        foreach (var userId in userIds)
        {
            if (!_chatService.IsUserConnected(userId))
            {
                // Store the message in a database or send a push notification
                Console.WriteLine($"Usuario {userId} no está conectado. Mensaje no entregado.");
            }
        }
    }

}
