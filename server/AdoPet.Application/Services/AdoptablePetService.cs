using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.Contracts.Services;
using AdoPet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application.Services
{
    public class AdoptablePetService:IAdoptablePetService
    {

        private readonly IAdoptablePetRepository _adoptablePetRepository;



        public AdoptablePetService(IAdoptablePetRepository adoptablePetRepository)
        {
            _adoptablePetRepository = adoptablePetRepository;
        }


            
        public async Task<AdoptablePet> AddAdoptablePet(AdoptablePet adoptablePet)
        {
            try
            {
                if (adoptablePet == null)
                {
                    throw new ArgumentNullException("The AdoptablePet object cannot be null.");
                }
    
                var result = await _adoptablePetRepository.AddAsync(adoptablePet);
                return result;

            }
            catch (Exception ex)
            {
                throw new Exception("Error adding the adoptable pet to the database.", ex);

            }
            
        }

        public Task DeleteAdoptablePet(AdoptablePet adoptablePet)
        {
            throw new NotImplementedException();
        }

        public Task<AdoptablePet> GetAdoptablePetById(int id)
        {
           
            bool exists = _adoptablePetRepository.PetIdExistsAsync(id).Result;
            if (!exists)
            {
                throw new Exception("The pet does not exist in the database.");
            }
            return _adoptablePetRepository.GetByIdAsync(id);


        }

        public async Task<IEnumerable<AdoptablePet>> GetAdoptablePets()
        {
            var pets = await _adoptablePetRepository.GetAllAsync();
            return pets.AsEnumerable();
        }
    }
}
