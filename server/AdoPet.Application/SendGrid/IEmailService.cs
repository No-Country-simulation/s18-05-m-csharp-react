using AdoPet.Domain.Entities;

namespace AdoPet.Application.SendGrid;

public interface IEmailService
{
    Task<bool> SendEmailWithReplyTo(AdoptionRequest adoptionRequest);

}
