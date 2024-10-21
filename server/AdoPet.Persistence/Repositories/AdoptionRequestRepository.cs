using AdoPet.Persistence.Data;
using AdoPet.Application.Contracts.Persistence;
using AdoPet.Domain.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using AdoPet.Domain.Enums;

namespace AdoPet.Persistence.Repositories;
public class AdoptionRequestRepository : GenericRepository<AdoptionRequest>, IAdoptionRequestRepository
{
    public AdoptionRequestRepository(AdoPetDbContext dbContext) : base(dbContext)
    {
    }

    public AdoptionRequestRepository(AdoPetDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
    {
    }

    public async Task<bool> AdoptionRequestIdExistsAsync(int id)
    {
        return await _dbContext.AdoptionRequests.AnyAsync(p => p.Id == id);
    }

    public async Task<AdoptionRequest> GetById(int id)
    {
        return await _dbContext.AdoptionRequests
            .Include(p => p.Adopter)
            .Include(p => p.Pet)
            .Where(p=>p.Status==AdoptionRequestStatus.Pending)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IReadOnlyList<AdoptionRequest>> GetAllWithDetailsAsync()
    {
        return await _dbContext.AdoptionRequests
            .Include(ar => ar.Adopter)
            .Include(ar => ar.Pet)
           .Where(ar => ar.Status == AdoptionRequestStatus.Pending)
            .ToListAsync();
    }
}
