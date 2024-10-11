using AdoPet.Domain.Entities;

namespace AdoPet.Application.Contracts.Persistence;

public interface IAdoptablePetRepository : IGenericRepository<AdoptablePet>
{
    Task<bool> PetIdExistsAsync(int id);
}
