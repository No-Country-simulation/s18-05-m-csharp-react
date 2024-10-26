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

    public async Task<AdoptionRequest> GetById(int id,int userId)
    {
        return await _dbContext.AdoptionRequests
            .Include(p => p.Adopter)
            .Include(p => p.Pet)
            .Include(p => p.Pet.Owner)
            .Where(p => p.Status == AdoptionRequestStatus.Pending && p.Pet.Owner.Id == userId)
            .FirstOrDefaultAsync(p => p.Id == id);
    }


    public async Task<AdoptionRequest> GetByIdWithOwner(int id)
    {
        return await _dbContext.AdoptionRequests
            .Include(p => p.Adopter)
            .Include(p => p.Pet)
            .Include(p => p.Pet.Owner)
            .Where(p => p.Status == AdoptionRequestStatus.Pending)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IReadOnlyList<AdoptionRequest>> GetAllWithDetailsAsync(int userId)
    {
        return await _dbContext.AdoptionRequests
            .Include(ar => ar.Adopter)
            .Include(ar => ar.Pet)
            .ThenInclude(p => p.Owner)
            .Where(ar => ar.Status == AdoptionRequestStatus.Pending && ar.Pet.Owner.Id == userId)
            .ToListAsync();
    }
}
