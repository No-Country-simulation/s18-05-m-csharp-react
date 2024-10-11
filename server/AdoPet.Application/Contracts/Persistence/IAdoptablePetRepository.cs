using AdoPet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application.Contracts.Persistence
{
    public interface IAdoptablePetRepository : IGenericRepository<AdoptablePet>
    {
        Task<bool> PetIdExistsAsync(int id);
    }
}
