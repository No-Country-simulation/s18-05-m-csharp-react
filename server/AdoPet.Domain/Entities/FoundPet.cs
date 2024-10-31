namespace AdoPet.Domain.Entities;

public class FoundPet : Animal
{
    public string? AditionalInfo { get; set; }
    public DateTime FoundDate { get; set; }
    public string FoundLocation { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}
