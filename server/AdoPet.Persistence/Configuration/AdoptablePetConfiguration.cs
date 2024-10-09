using AdoPet.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Configuration;

public class AdoptablePetConfiguration : IEntityTypeConfiguration<AdoptablePet>
{
    public void Configure(EntityTypeBuilder<AdoptablePet> builder)
    {
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Name)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(p => p.Breed)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(p => p.Gender)
               .HasConversion<string>()
               .IsRequired();

        builder.Property(p => p.Location)
               .IsRequired()
               .HasMaxLength(150);

        builder.Property(p => p.Notes)
               .HasMaxLength(500); // Optional

        builder.Property(p => p.PhotoUrl)
               .IsRequired(false); // Optional

        builder.Property(p => p.IsAdopted)
               .HasDefaultValue(false); // False default
        /*
        builder.HasOne(p => p.Owner)
               .WithMany(u => u.PetsForAdoption)
               .HasForeignKey(p => p.UserId);
        */
        builder.HasIndex(p => p.Name);
    }
}