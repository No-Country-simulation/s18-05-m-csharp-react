using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.FoundPet;

public class FoundPetGetAllDto
{

    public int Id { get; set; }
    public AnimalType AnimalType { get; set; }
    public string PhotoUrl { get; set; }
    public DateTime DatePublished { get; set; }
}
