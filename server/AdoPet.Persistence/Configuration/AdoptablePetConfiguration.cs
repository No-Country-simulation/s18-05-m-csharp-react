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
        /*
        builder.Property(p => p.Breed)
               .IsRequired()
               .HasMaxLength(100);
        */
        builder.Property(p => p.AnimalType)
            .IsRequired()
            .HasConversion<string>();

        builder.Property(p => p.Gender)
               .HasConversion<string>()
               .IsRequired();

        builder.Property(p => p.Location)
               .IsRequired()
               .HasMaxLength(150);

        builder.Property(p => p.Notes)
               .HasMaxLength(500); // Optional

        builder.Property(p => p.Neutered)
            .IsRequired()
            .HasDefaultValue(false);// False default
        builder.Property(p => p.Vaccines)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(p => p.Sterilized)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(p => p.Size)
               .IsRequired()
               .HasConversion<string>();

        builder.Property(p => p.DatePublished)
                .HasDefaultValueSql("getdate()");


        builder.Property(p => p.PhotoUrl)
               .IsRequired(false); // Optional

        builder.Property(p => p.IsAdopted)
               .HasDefaultValue(false);

        builder.HasOne(p => p.Owner)
               .WithMany(u => u.PetsForAdoption)
               .HasForeignKey(p => p.UserId);


        // Indices individuales
        builder.HasIndex(p => p.Name);
        builder.HasIndex(p => p.AnimalType);
        builder.HasIndex(p => p.Size);
        builder.HasIndex(p => p.Gender);
        builder.HasIndex(p => p.DateBirth);  // Para consultas basadas en edad
        builder.HasIndex(p => p.Vaccines);
        builder.HasIndex(p => p.Location);

        // Indice para todas las columnas del filtrado
        builder.HasIndex(p => new { p.AnimalType, p.Size, p.Gender, p.DateBirth, p.Vaccines, p.Location });

        // Otros índices compuestos más pequeños
        builder.HasIndex(p => new { p.AnimalType, p.Size, p.Gender });
        builder.HasIndex(p => new { p.DateBirth, p.Vaccines, p.Location });

    }
}