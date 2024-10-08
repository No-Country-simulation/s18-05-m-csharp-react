using Microsoft.EntityFrameworkCore;
using System.Reflection;
using AdoPet.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace AdoPet.Persistence.Data;

public class AdoPetDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public AdoPetDbContext(DbContextOptions<AdoPetDbContext> options) 
        : base(options)
    {
    }

    public DbSet<AdoptablePet> AdoptablePets { get; set; }
    public DbSet<AdoptionRequest> AdoptionRequests { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}