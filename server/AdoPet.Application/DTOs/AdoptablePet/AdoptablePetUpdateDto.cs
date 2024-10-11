using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetUpdateDto
{
    public string Name { get; set; }
    public string Breed { get; set; }
    public Gender Gender { get; set; }
    public string Location { get; set; }
    public string Notes { get; set; }
    public string PhotoUrl { get; set; }
    public bool IsAdopted { get; set; }
}
