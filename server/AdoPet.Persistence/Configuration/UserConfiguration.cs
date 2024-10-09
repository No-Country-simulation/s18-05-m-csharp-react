using AdoPet.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Configuration;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.Id);

        builder.Property(u => u.Name)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(u => u.LastName)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(u => u.PhotoUrl)
               .IsRequired(false);

        builder.HasMany(u => u.PetsForAdoption)
               .WithOne(p => p.Owner)
               .HasForeignKey(p => p.UserId);

        builder.HasMany(u => u.AdoptionRequests)
               .WithOne(ar => ar.Adopter)
               .HasForeignKey(ar => ar.UserId);

        builder.HasIndex(u => u.Email).IsUnique();
    }
}