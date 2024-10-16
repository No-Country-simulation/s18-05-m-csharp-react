using AdoPet.Application.Contracts.Persistence;
using AdoPet.Persistence.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    protected readonly AdoPetDbContext _dbContext;
    protected readonly IMapper _mapper;


    public GenericRepository(AdoPetDbContext dbContext)
    {
        _dbContext = dbContext;
    }


    public GenericRepository(AdoPetDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<T> AddAsync(T entity)
    {
        await _dbContext.Set<T>().AddAsync(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        return await _dbContext.Set<T>().FindAsync(id);
    }

    public void Update(T entity)
    {
        _dbContext.Set<T>().Update(entity);

    }


    public async Task<IReadOnlyList<T>> GetAllAsync()
    {
        return await _dbContext.Set<T>().ToListAsync();
    }



    public async Task<bool> DeleteAsync(int id)
    {
        var entity = await GetByIdAsync(id);
        if (entity == null)
        {
            return false;
        }
        _dbContext.Set<T>().Remove(entity);
        await _dbContext.SaveChangesAsync();
        return true;

    }




    public async Task SaveChangesAsync()
    {
        await _dbContext.SaveChangesAsync();
    }
}
