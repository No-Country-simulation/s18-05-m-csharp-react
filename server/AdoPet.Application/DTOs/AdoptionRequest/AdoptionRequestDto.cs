using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptionRequest
{
    public class AdoptionRequestDto
    {
        public int AdoptablePetId { get; set; }
        public DateTime RequestDate { get; set; }
       
    }
}
