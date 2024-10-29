using AdoPet.Application.Contracts.Services;
using AdoPet.Application.Services;
using Microsoft.Extensions.DependencyInjection;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Add services
        services.AddScoped<IAdoptablePetService, AdoptablePetService>();
        services.AddScoped<IAdoptionRequestService,AdoptionRequestService>();
        services.AddScoped<IFoundPetService, FoundPetService>();


        return services;
    }
}
