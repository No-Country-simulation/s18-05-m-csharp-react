
namespace AdoPet.Application.Contracts.RealTime;

public interface IChatService
{
    void AddConnection(string connectionId, int userId);
    void RemoveConnection(string connectionId);
    bool IsUserConnected(int userId);
    string GetConnectionId(int userId);
    Task AddUserToGroup(int userId, string groupName);
    List<int> GetUserIdsInGroup(string groupName);
    Task<string> StartChatAsync(List<int> userIds);
    Task<List<string>> GetChatHistoryAsync(int userId1, int userId2);
}
