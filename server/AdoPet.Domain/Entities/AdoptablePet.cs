using AdoPet.Domain.Enums;

namespace AdoPet.Domain.Entities;

public class AdoptablePet
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public Gender Gender { get; set; }
    public string Location { get; set; }
    public string Notes { get; set; }
    public string PhotoUrl { get; set; }
    public int UserId { get; set; }
    public User Owner { get; set; }
    public bool IsAdopted { get; set; }
}
