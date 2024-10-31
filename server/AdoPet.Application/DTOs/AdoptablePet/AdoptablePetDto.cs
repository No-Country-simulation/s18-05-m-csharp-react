using AdoPet.Domain.Enums;
using System.Text.Json.Serialization;

namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetDto
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
    [JsonIgnore]
    //Lo ignoro para que no lo pida en el endpoint.
    //Tengo que ver alguna forma para que si lo muestre cuando le devuelve el objeto creado.
    public DateTime DatePublished { get; set; }
    //public DateTime? DateBirth { get; set; }
    public bool IsAdopted { get; set; }

}
