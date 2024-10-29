using AdoPet.Domain.Enums;

namespace AdoPet.Domain.Entities;

public abstract class Animal
{
    public int Id { get; set; }
    public string Name { get; set; }
    public AnimalType AnimalType { get; set; }
    public Gender Gender { get; set; }
    public string? Age { get; set; }
    public Size Size { get; set; }
    public string? PhotoUrl { get; set; }
    public string? Notes { get; set; }
}
