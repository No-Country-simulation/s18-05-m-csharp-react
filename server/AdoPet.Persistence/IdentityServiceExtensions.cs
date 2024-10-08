using AdoPet.Domain.Entities;
using AdoPet.Persistence.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AdoPet.Persistence;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<AdoPetDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("AdoPetConnectionString"));
        });

        services.AddIdentity<User, IdentityRole<int>>()
           .AddEntityFrameworkStores<AdoPetDbContext>()
           .AddDefaultTokenProviders();

        return services;
    }
}
