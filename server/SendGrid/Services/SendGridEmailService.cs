using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.SendGrid;
using AdoPet.Domain.Entities;
using AdoPet.SendGrid.Helpers;
using SendGrid;
using SendGrid.Helpers.Mail;

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
    public async Task<bool> SendEmailWithReplyTo(AdoptionRequest adoptionRequest)
    {
        var newOwner = adoptionRequest.Adopter;
        var formerOwner = adoptionRequest.Pet.Owner;
        var pet = adoptionRequest.Pet;


        SendGridClient client = new SendGridClient(_sendGridConfiguration.ApiKey);

        EmailAddress fromEmailAddress = new EmailAddress("AdopPet@proton.me", "JuniorHub");

        EmailAddress toEmailAddress = new EmailAddress(newOwner.Email, string.Concat(newOwner.Name, " ", newOwner.LastName));

        string subject = $"🎉 ¡Felicidades {newOwner.Name}! ¡Tu solicitud de adopción ha sido aceptada!";

        string plainTextContent = $@"
        Hola {newOwner.Name} {newOwner.LastName},

        ¡Nos alegra mucho informarte que tu solicitud de adopción de {pet.Name} ha sido aceptada!

        Estamos seguros de que {pet.Name} será muy feliz contigo.

        Aquí tienes los detalles de tu nueva mascota:
        - Nombre: {pet.Name}
        - Fecha de nacimiento: {pet.DateBirth:dd/MM/yyyy}
        - Cuidador actual: {formerOwner.Name} {formerOwner.LastName}

        Por favor, responde a este correo lo antes posible para coordinar los siguientes pasos con {formerOwner.Name}.

        ¡Te deseamos lo mejor en esta nueva etapa junto a {pet.Name}!
        Con cariño,
        El equipo de AdopPet";

        string htmlContent = $@"
        <html>
        <body>
            <h2 style='color: #4CAF50;'>🎉 ¡Felicidades {newOwner.Name}!</h2>
            <p>Nos alegra mucho informarte que tu solicitud de adopción de <strong>{pet.Name}</strong> ha sido aceptada. ¡Estamos muy emocionados por esta nueva etapa!</p>
            <p>Estamos seguros de que <strong>{pet.Name}</strong> será muy feliz contigo. Aquí tienes los detalles de tu nueva mascota:</p>
         <ul>
            <li><strong>Nombre:</strong> {pet.Name}</li>
            <li><strong>Fecha de nacimiento:</strong> {pet.DateBirth:dd/MM/yyyy}</li>
            <li><strong>Cuidador actual:</strong> {formerOwner.Name} {formerOwner.LastName}</li>
        </ul>
        <p>Para coordinar los próximos pasos, haz clic en el botón a continuación o responde a este correo:</p>
        <a href='mailto:{formerOwner.Email}' style='background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Contactar a {formerOwner.Name}</a>
        <br />
        <p>¡Te deseamos lo mejor en esta nueva etapa junto a {pet.Name}!<br/>Con cariño,<br/>El equipo de AdopPet</p>
    </body>
    </html>";

        var replyTo = new EmailAddress(formerOwner.Email, string.Concat(formerOwner.Name, " ", formerOwner.LastName));
        var notificationMessage = MailHelper.CreateSingleEmail(fromEmailAddress, toEmailAddress, subject, plainTextContent, htmlContent);
        notificationMessage.ReplyTo = replyTo;
        var response = await client.SendEmailAsync(notificationMessage);
        return response.IsSuccessStatusCode;

    }
}
