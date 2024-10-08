using AdoPet.Domain.Enums;

namespace AdoPet.Domain.Entities;

public class AdoptionRequest
{
    public int Id { get; set; }
    public int AdoptablePetId { get; set; }
    public AdoptablePet Pet { get; set; }
    public int UserId { get; set; }
    public User Adopter { get; set; }
    public DateTime RequestDate { get; set; }
    public AdoptionRequestStatus Status { get; set; }
}
