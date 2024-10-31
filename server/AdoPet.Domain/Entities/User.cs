using Microsoft.AspNetCore.Identity;

namespace AdoPet.Domain.Entities;

public class User : IdentityUser<int>
{
    public string Name { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string PhotoUrl { get; set; } = null!;

    public List<AdoptablePet> PetsForAdoption { get; set; }
    public List<AdoptionRequest> AdoptionRequests { get; set; }
}
