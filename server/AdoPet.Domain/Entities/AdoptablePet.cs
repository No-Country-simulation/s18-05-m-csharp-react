
namespace AdoPet.Domain.Entities;

public class AdoptablePet : Animal
{
    public string Location { get; set; }
    public bool IsNeutered { get; set; }
    public bool HasVaccines { get; set; }
    public bool IsSterilized { get; set; }
    public string? HealthIssues { get; set; }
    public bool IsAdopted { get; set; }
    public DateTime DatePublished { get; set; }
    public int UserId { get; set; }
    public User Owner { get; set; }
}
