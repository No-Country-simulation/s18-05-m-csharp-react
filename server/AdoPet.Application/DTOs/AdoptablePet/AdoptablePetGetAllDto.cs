namespace AdoPet.Application.DTOs.AdoptablePet;

public class AdoptablePetGetAllDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string PhotoUrl { get; set; }
    public DateTime DatePublished { get; set; }
    //public DateTime? DateBirth { get; set; }
    public string? Age { get; set; }
    public bool IsAdopted { get; set; }
}
