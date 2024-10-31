using AdoPet.Application.Contracts.RealTime;
using AdoPet.Application.DTOs.Chat;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdoPet.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowSpecificOrigin")]
public class ChatController : ControllerBase
{
    private readonly IChatService _chatService;

    public ChatController(IChatService chatService)
    {
        _chatService = chatService;
    }

    [HttpPost("start")]
    public async Task<IActionResult> StartChat([FromBody] StartChatDto dto)
    {
        var groupName = await _chatService.StartChatAsync(dto.UserIds);
        if (groupName == null)
        {
            return BadRequest("Failed to create chat.");
        }
        await _chatService.AddUserToGroup(dto.UserIds[0], groupName); 
        await _chatService.AddUserToGroup(dto.UserIds[1], groupName);

        return Ok(new { GroupName = groupName });
    }

    [HttpGet("history/{userId1}/{userId2}")]
    public async Task<IActionResult> GetChatHistory(int userId1, int userId2)
    {
        var messages = await _chatService.GetChatHistoryAsync(userId1, userId2);
        if (messages == null)
        {
            return NotFound("No chat history found between users.");
        }
        return Ok(messages);
    }

}
