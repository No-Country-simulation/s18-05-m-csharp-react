namespace AdoPet.Application.Contracts.Persistence;

public interface IGenericRepository<T> where T : class
{
    Task<T> AddAsync(T entity);
    Task<T> GetByIdAsync(int id);
    Task<IReadOnlyList<T>> GetAllAsync();
    Task<bool> DeleteAsync(int id);
    public void Update(T entity);
    Task SaveChangesAsync();
}
