using AdoPet.Domain.Enums;
using System.Text.Json.Serialization;

namespace AdoPet.Application.DTOs.AdoptionRequest
{
    public class AdoptionRequestUpdateDto
    {
        public AdoptionRequestStatus Status { get; set; }
        
    }
}
