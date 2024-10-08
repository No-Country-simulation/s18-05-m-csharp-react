using AdoPet.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace AdoPet.Persistence.Configuration;

public class AdoptionRequestConfiguration : IEntityTypeConfiguration<AdoptionRequest>
{
    public void Configure(EntityTypeBuilder<AdoptionRequest> builder)
    {
        builder.HasKey(ar => ar.Id);

        builder.Property(ar => ar.RequestDate)
               .IsRequired();

        builder.Property(ar => ar.Status)
               .HasConversion<string>()
               .IsRequired();

        builder.HasOne(ar => ar.Pet)
               .WithMany()
               .HasForeignKey(ar => ar.AdoptablePetId)
               .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(ar => ar.Adopter)
               .WithMany(u => u.AdoptionRequests)
               .HasForeignKey(ar => ar.UserId)
               .OnDelete(DeleteBehavior.Restrict);
    }
}