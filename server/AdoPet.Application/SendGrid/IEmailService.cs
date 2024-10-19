namespace AdoPet.Application.SendGrid;

public interface IEmailService
{
    Task SendEmailWithReplyTo(string email, string subject, string message, string replyTo);

}
