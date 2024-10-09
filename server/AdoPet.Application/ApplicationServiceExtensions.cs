using AdoPet.Application.Contracts.Services;
using AdoPet.Application.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application
{
    public static class ApplicationServiceExtensions
    {
       public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Add services
            services.AddScoped<IAdoptablePetService, AdoptablePetService>();

            return services;
        }
    }
}
