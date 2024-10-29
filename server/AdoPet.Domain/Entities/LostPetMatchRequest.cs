namespace AdoPet.Domain.Entities;

public class LostPetMatchRequest
{
    public int Id { get; set; }
    public int LostPetId { get; set; }
    public LostPet LostPet { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public string? AditionalInfo { get; set; }
    public string? PhotoPetUrl { get; set; }
    public DateTime RequestDate { get; set; }
}
