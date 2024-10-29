using AdoPet.Domain.Entities;

namespace AdoPet.Application.Contracts.Persistence;

public interface IFoundPetRepository : IGenericRepository<FoundPet>
{
    Task<bool> FoundPetIdExistsAsync(int id);
    Task<FoundPet> GetById(int id);
}
