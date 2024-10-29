
using AdoPet.Application.Contracts.Persistence;
using AdoPet.Domain.Entities;
using AdoPet.Persistence.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Repositories;

public class FoundPetRepository : GenericRepository<FoundPet>, IFoundPetRepository
{

    public FoundPetRepository(AdoPetDbContext dbContext) : base(dbContext)
    {
    }


    public FoundPetRepository(AdoPetDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
    {
    }

    public async Task<bool> FoundPetIdExistsAsync(int id)
    {
        return await _dbContext.FoundPets.AnyAsync(p => p.Id == id);
    }

    public async Task<FoundPet> GetById(int id)
    {
        return await _dbContext.FoundPets.Include(p => p.User).FirstOrDefaultAsync(p => p.Id == id);

    }
}
