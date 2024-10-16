using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Domain.Entities;
using AutoMapper;

namespace AdoPet.Mapping.Profiles;

public class AdoptablePetProfile : Profile
{

    public AdoptablePetProfile()
    {
        CreateMap<AdoptablePet, AdoptablePetDto>().ReverseMap();
        CreateMap<AdoptablePetUpdateDto, AdoptablePet>().ReverseMap();
        CreateMap<AdoptablePetIdDto, AdoptablePet>().ReverseMap();
        CreateMap<AdoptablePetGetAllDto, AdoptablePet>().ReverseMap();
    }

}
