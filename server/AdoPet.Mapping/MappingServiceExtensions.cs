using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace AdoPet.Mapping;

    public static class MappingServiceExtensions
    {
        public static IServiceCollection AddMappingProfiles(this IServiceCollection services)
    {
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
       
        return services;
    }
    }
