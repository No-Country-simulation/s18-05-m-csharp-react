using AdoPet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdoPet.Persistence.Configuration;

public class FoundPetConfiguration: IEntityTypeConfiguration<FoundPet>
{
    public void Configure(EntityTypeBuilder<FoundPet> builder)
    {
        builder.HasKey(lp => lp.Id);

        builder.Property(lp => lp.Name)
               .IsRequired(false)
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
            .HasOne(fp => fp.User)
            .WithMany()
            .HasForeignKey(fp => fp.UserId)
            .OnDelete(DeleteBehavior.NoAction);

    }
}
