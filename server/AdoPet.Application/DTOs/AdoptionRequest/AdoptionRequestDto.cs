using System.Text.Json.Serialization;

namespace AdoPet.Application.DTOs.AdoptionRequest
{
    public class AdoptionRequestDto
    {
        public int AdoptablePetId { get; set; }

        [JsonIgnore]
        public DateTime RequestDate { get; private set; } = DateTime.Now; 
       
    }
}
