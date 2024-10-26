using AdoPet.Application.SendGrid;
using AdoPet.SendGrid.Helpers;
using AdoPet.SendGrid.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AdoPet.SendGrid;

public static class SendGridServiceExtensions
{

    public static IServiceCollection AddSendGridServiceExtensions(this IServiceCollection services, IConfiguration configuration)
    {
        var sendGridConfiguration = new SendGridConfiguration();
        
        configuration.Bind("SendGridConfiguration", sendGridConfiguration);


        services.AddSingleton(sendGridConfiguration);
        services.AddScoped<IEmailService, SendGridEmailService>();


        return services;
    }

}
