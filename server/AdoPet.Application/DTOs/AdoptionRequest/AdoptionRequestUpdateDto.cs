using AdoPet.Domain.Enums;

namespace AdoPet.Application.DTOs.AdoptionRequest
{
    public class AdoptionRequestUpdateDto
    {
        public int UserId { get; set; }
        public AdoptionRequestStatus Status { get; set; }
    }
}
