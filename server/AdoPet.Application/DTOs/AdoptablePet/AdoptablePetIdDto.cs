using AdoPet.Application.DTOs.User;
using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetIdDto
{

    public string Name { get; set; }
    public Gender Gender { get; set; }
    public string PhotoUrl { get; set; }
    public string Location { get; set; }
    public AnimalType AnimalType { get; set; }
    public string Notes { get; set; }
    public DateTime DatePublished { get; set; }
    public DateTime DateBirth { get; set; }
    public bool Neutered { get; set; }
    public bool Vaccines { get; set; }
    public bool Sterilized { get; set; }
    public Size Size { get; set; }
    public int UserId { get; set; }
    public UserDto Owner { get; set; }

    public bool IsAdopted { get; set; }

}
