using AdoPet.Application.Contracts.Cloudinary;
using AdoPet.Cloudinary.Services;
using AdoPet.Cloudinary.Helpers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AdoPet.Cloudinary;

public static class CloudinaryServiceExtensions
{
    public static IServiceCollection AddCloudServiceExtensions(this IServiceCollection services, IConfiguration configuration)
    {
        var cloudSettings = new CloudinarySettings();
        configuration.Bind("CloudinarySettings", cloudSettings);

        services.AddSingleton(cloudSettings);
        services.AddScoped<ICloudinaryService, CloudinaryService>();

        return services;
    }
}
