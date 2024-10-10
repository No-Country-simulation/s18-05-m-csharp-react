using AdoPet.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application.DTOs.AdoptablePet
{
    public class AdoptablePetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public Gender Gender { get; set; }
        public string Location { get; set; }
        public string Notes { get; set; }
        public string PhotoUrl { get; set; }

        public bool IsAdopted { get; set; }
    }
}
