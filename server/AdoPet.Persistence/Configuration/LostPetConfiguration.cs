using AdoPet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdoPet.Persistence.Configuration;

public class LostPetConfiguration : IEntityTypeConfiguration<LostPet>
{
    public void Configure(EntityTypeBuilder<LostPet> builder)
    {
        builder.HasKey(lp => lp.Id);

        builder.Property(lp => lp.Name)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(lp => lp.AnimalType)
            .IsRequired()
            .HasConversion<string>();

        builder.Property(lp => lp.Gender)
               .HasConversion<string>()
               .IsRequired();

        builder.Property(lp => lp.Size)
               .IsRequired()
               .HasConversion<string>();

        builder.Property(lp => lp.Notes)
              .HasMaxLength(500);

        builder.Property(lp => lp.PhotoUrl)
               .IsRequired(false);

        builder
            .HasOne(lp => lp.Owner)
            .WithMany()
            .HasForeignKey(lp => lp.UserId)
            .OnDelete(DeleteBehavior.NoAction);

    }

}
