using AdoPet.Application.Contracts.Persistence;
using AdoPet.Domain.Entities;
using AdoPet.Persistence.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Persistence.Repositories
{
    public class AdoptablePetRepository : GenericRepository<AdoptablePet>, IAdoptablePetRepository
    {
        public AdoptablePetRepository(AdoPetDbContext dbContext) : base(dbContext)
        {
        }

        public AdoptablePetRepository(AdoPetDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }

        public async Task<bool> PetIdExistsAsync(int id)
        {
            return await _dbContext.AdoptablePets.AnyAsync(p => p.Id == id);


        }

    }
}
