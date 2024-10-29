using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.FoundPet;

public class FoundPetCreateDto
{
    public string PhotoUrl { get; set; }
    public AnimalType AnimalType { get; set; }
    public Gender Gender { get; set; }
    public string Location { get; set; }
    public string? Notes { get; set; }

}
