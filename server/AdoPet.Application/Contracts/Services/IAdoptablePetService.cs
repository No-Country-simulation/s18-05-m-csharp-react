using AdoPet.Application.Contracts.Persistence;
using AdoPet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application.Contracts.Services
{
    public interface IAdoptablePetService
    {

        Task<AdoptablePet> AddAdoptablePet(AdoptablePet adoptablePet);
        Task<IEnumerable<AdoptablePet>> GetAdoptablePets();
        Task<AdoptablePet> GetAdoptablePetById(int id);
        Task DeleteAdoptablePet(AdoptablePet adoptablePet);

    }
}
