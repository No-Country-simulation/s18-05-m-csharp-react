using AdoPet.Domain.Entities;
using AdoPet.Persistence.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AdoPet.Persistence.Identity;
using AdoPet.Domain.Helpers;
using AdoPet.Domain.Utilities;
using AdoPet.Domain.Enums;
using AdoPet.Application.Contracts.Persistence;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;


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

           // identity
        var jwtConfig = new JwtConfiguration();
        configuration.Bind("JwtConfiguration", jwtConfig);
        services.AddSingleton(jwtConfig);
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<UserManager<User>>();
        services.AddScoped<SignInManager<User>>();
        services.AddScoped<RoleManager<IdentityRole<int>>>();

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
                .AddJwtBearer(config =>
                {
                    config.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = jwtConfig.ValidateIssuerSigningKey,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig.Key)),
                        ValidateIssuer = jwtConfig.ValidateIssuer,
                        ValidateAudience = jwtConfig.ValidateAudience,
                        ValidateLifetime = jwtConfig.ValidateLifeTime,
                        ValidIssuer = jwtConfig.Issuer,
                        ValidAudience = jwtConfig.Audience
                        
                    };
                });
        services.AddAuthorization(options =>
        {
            options.AddPolicy(Role.Admin.ToStringEnum(), policy =>
                policy.RequireRole(Role.Admin.ToStringEnum()));
            options.AddPolicy(Role.User.ToStringEnum(), policy =>
                policy.RequireRole(Role.User.ToStringEnum()));    
        });        

        return services;


    }
}
