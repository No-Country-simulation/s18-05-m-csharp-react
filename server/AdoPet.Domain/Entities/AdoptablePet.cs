using AdoPet.Domain.Enums;

namespace AdoPet.Domain.Entities;

public class AdoptablePet
{
    public int Id { get; set; }
    public string Name { get; set; }
    /*public string Breed { get; set; }*/
    public AnimalType AnimalType { get; set; }
    public Gender Gender { get; set; }
    public string Location { get; set; }
    public string Notes { get; set; }
    public bool Neutered { get; set; }
    public bool Vaccines { get; set; }
    public bool Sterilized { get; set; }
    public Size Size { get; set; }
    public DateTime DatePublished { get; set; }
    public DateTime? DateBirth { get; set; }
    public string PhotoUrl { get; set; }
    public int UserId { get; set; }
    public User Owner { get; set; }
    public bool IsAdopted { get; set; }
}
