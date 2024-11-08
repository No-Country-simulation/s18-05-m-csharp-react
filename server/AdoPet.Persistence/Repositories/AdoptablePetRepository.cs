﻿using AdoPet.Application.Contracts.Persistence;
using AdoPet.Domain.Entities;
using AdoPet.Persistence.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Repositories;

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

    public async Task<AdoptablePet> GetById(int id)
    {
        return await _dbContext.AdoptablePets.Include(p => p.Owner).FirstOrDefaultAsync(p => p.Id == id);
    }

}
