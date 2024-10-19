using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.SendGrid;
using AdoPet.SendGrid.Helpers;

namespace AdoPet.SendGrid.Services;

internal class SendGridEmailService : IEmailService
{
    private readonly SendGridConfiguration _sendGridConfiguration;
    private readonly IAdoptablePetRepository _adoptablePetRepository;

    public SendGridEmailService(SendGridConfiguration sendGridConfiguration, IAdoptablePetRepository adoptablePetRepository)
    {
        _sendGridConfiguration = sendGridConfiguration;
        _adoptablePetRepository = adoptablePetRepository;
    }
    public async Task SendEmailWithReplyTo(string email, string subject, string message, string replyTo /*ID AdoptionRequest*/)
    {
        //TODO: Implementar la logica de envio de email. Requiere CRUD AdoptionRequest realizado.
        throw new NotImplementedException();
    }
}
