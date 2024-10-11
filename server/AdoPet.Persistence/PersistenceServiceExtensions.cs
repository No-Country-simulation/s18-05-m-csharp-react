using AdoPet.Persistence.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace AdoPet.Persistence;

public static class PersistenceServiceExtensions
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<AdoPetDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("AdoPetConnectionString"));
        });

        // repositories
        //services.AddScoped<IRepository, Repository>();

        return services;
    }
}
