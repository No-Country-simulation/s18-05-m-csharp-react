using AdoPet.Application.DTOs.User;
using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.FoundPet;

public class FoundPetIdDto
{

    public AnimalType AnimalType { get; set; }
    public string PhotoUrl { get; set; }
    public string Location { get; set; }
    public DateTime DatePublished { get; set; }
    public Gender Gender { get; set; }
    public string? Notes { get; set; }

    public int UserId { get; set; }
    public UserDto UserDto { get; set; }
}
