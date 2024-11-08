using AdoPet.Domain.Entities;

namespace AdoPet.Application.Contracts.Persistence
{
    public interface IAdoptionRequestRepository : IGenericRepository<AdoptionRequest>
    {
        Task<bool> AdoptionRequestIdExistsAsync(int id);
        Task<AdoptionRequest> GetById(int id,int userId);
        Task<AdoptionRequest> GetByIdWithOwner(int id);
        Task<IReadOnlyList<AdoptionRequest>> GetAllWithDetailsAsync(int userId);
    }
}
