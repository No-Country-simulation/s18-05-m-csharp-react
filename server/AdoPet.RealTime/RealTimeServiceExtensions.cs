using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using AdoPet.RealTime.Hubs;
using AdoPet.RealTime.Services;
using AdoPet.Application.Contracts.RealTime;

namespace AdoPet.RealTime;

public static class RealTimeServiceExtensions
{
    public static IServiceCollection AddRealTimeServices(this IServiceCollection services)
    {
        services.AddScoped<IChatService, ChatService>();
        services.AddSignalR();
        return services;
    }
}

public static class EndpointRouteBuilderExtensions
{
    public static IEndpointRouteBuilder MapHubs(this WebApplication app)
    {
        app.MapHub<ChatHub>("/chatHub").RequireCors("AllowSpecificOrigin");

        return app;
    }
}