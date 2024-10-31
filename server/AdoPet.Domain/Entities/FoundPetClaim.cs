namespace AdoPet.Domain.Entities;

public class FoundPetClaim
{
    public int Id { get; set; }
    public int FoundPetId { get; set; }
    public FoundPet FoundPet { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public string? AditionalInfo { get; set; }
    public string? PhotoPetUrl { get; set; }
    public DateTime ClaimDate { get; set; }
}
