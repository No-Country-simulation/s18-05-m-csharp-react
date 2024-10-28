namespace AdoPet.Domain.Entities;

public class LostPet : Animal
{
    public string? HealthIssues { get; set; }
    public string? AditionalInfo { get; set; }
    public DateTime PublishedDate { get; set; }
    public DateTime LostDate { get; set; }
    public string LostLocation { get; set; }
    public int UserId { get; set; }
    public User Owner { get; set; }
}
