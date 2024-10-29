using AdoPet.Application.DTOs.FoundPet;
using AdoPet.Domain.Entities;
using AutoMapper;

namespace AdoPet.Mapping.Profiles;

public class FoundPetProfile:Profile
{
    public FoundPetProfile()
    {
        CreateMap<FoundPet, FoundPetCreateDto>()
            .ForMember(dest => dest.Location, opt => opt.MapFrom(src => src.FoundLocation)).ReverseMap();
    }

}
