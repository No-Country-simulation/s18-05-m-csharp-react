using AdoPet.Application.DTOs.User;
using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptionRequest
{
    public class AdoptionRequestGetAllDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime DatePublished { get; set; }
        public DateTime? DateBirth { get; set; }
        public bool IsAdopted { get; set; }
        public UserDto Adoptable { get; set; }
        public UserDto Owner { get; set; }
        public AdoptionRequestStatus Status { get; set; }
        public DateTime RequestDate { get; set; }
    }
}
