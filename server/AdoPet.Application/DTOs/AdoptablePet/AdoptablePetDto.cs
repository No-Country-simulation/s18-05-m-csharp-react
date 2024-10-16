using AdoPet.Domain.Entities;
using AdoPet.Domain.Enums;
using System.Text.Json.Serialization;

namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetDto
{
    public string Name { get; set; }
    public Gender Gender { get; set; }
    public string Location { get; set; }
    public AnimalType AnimalType { get; set; }
    public string Notes { get; set; }
    public string PhotoUrl { get; set; }
    public bool Neutered { get; set; }
    public bool Vaccines { get; set; }
    public bool Sterilized { get; set; }
    [JsonIgnore]
    //Lo ignoro para que no lo pida en el endpoint.
    //Tengo que ver alguna forma para que si lo muestre cuando le devuelve el objeto creado.
    public DateTime DatePublished { get; set; }
    public DateTime? DateBirth { get; set; }
    public Size Size { get; set; }
    public bool IsAdopted { get; set; }
}
