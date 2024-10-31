using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetCreateDto
{
    public string Name { get; set; }
    public AnimalType AnimalType { get; set; }
    public Gender Gender { get; set; }
    public string? Age { get; set; }
    public Size Size { get; set; }
    public string? PhotoUrl { get; set; }
    public string? Notes { get; set; }
    public string Location { get; set; }
    public bool IsNeutered { get; set; }
    public bool HasVaccines { get; set; }
    public bool IsSterilized { get; set; }
    public string? HealthIssues { get; set; }
    //public bool IsAdopted { get; set; }
    //public DateTime DatePublished { get; set; }
}
