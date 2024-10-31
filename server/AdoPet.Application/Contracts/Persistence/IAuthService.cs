using AdoPet.Application.DTOs.Identity;
using Microsoft.AspNetCore.Identity;

namespace AdoPet.Application.Contracts.Persistence;

public interface IAuthService
{
    public Task<IdentityResult> RegisterAsync(RegisterDto register);
    public Task<(IdentityResult, string?)> LoginAsync(LoginDto login);
}
