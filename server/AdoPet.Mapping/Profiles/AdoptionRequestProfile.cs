using AdoPet.Application.DTOs.AdoptionRequest;
using AdoPet.Domain.Entities;
using AutoMapper;

namespace AdoPet.Mapping.Profiles;

public class AdoptionRequestProfile : Profile
{
    public AdoptionRequestProfile()
    {
        CreateMap<AdoptionRequest, AdoptionRequestDto>().ReverseMap();
        CreateMap<AdoptionRequestUpdateDto, AdoptionRequest>().ReverseMap();
        CreateMap<AdoptionRequestIdDto, AdoptionRequest>().ReverseMap();
        CreateMap<AdoptionRequest, AdoptionRequestGetAllDto>()
    .ForMember(dest => dest.Name, 
               opt => opt.MapFrom(src => src.Pet.Name))
    .ForMember(dest => dest.PhotoUrl, 
               opt => opt.MapFrom(src => src.Pet.PhotoUrl))
    .ForMember(dest => dest.DatePublished, 
               opt => opt.MapFrom(src => src.Pet.DatePublished))
    .ForMember(dest => dest.DateBirth, 
               opt => opt.MapFrom(src => src.Pet.DateBirth))
    .ForMember(dest => dest.IsAdopted, 
               opt => opt.MapFrom(src => src.Pet.IsAdopted))     
    .ForMember(dest => dest.Adoptable, 
               opt => opt.MapFrom(src => src.Adopter))
    .ForMember(dest => dest.Owner, 
               opt => opt.MapFrom(src => src.Pet.Owner))           
    .ForMember(dest => dest.Status, 
               opt => opt.MapFrom(src => src.Status))
    .ForMember(dest => dest.RequestDate, 
               opt => opt.MapFrom(src => src.RequestDate));


        CreateMap<AdoptionRequest, AdoptionRequestIdDto>()
            .ForMember(dest => dest.Adoptable, opt => opt.MapFrom(src => src.Adopter))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Pet.Name))
            .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Pet.Gender))
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Pet.PhotoUrl))
            .ForMember(dest => dest.DatePublished, opt => opt.MapFrom(src => src.Pet.DatePublished))
            .ForMember(dest => dest.DateBirth, opt => opt.MapFrom(src => src.Pet.DateBirth))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
            .ForMember(dest => dest.RequestDate, opt => opt.MapFrom(src => src.RequestDate))     
            .ForMember(dest => dest.IsAdopted, opt => opt.MapFrom(src => src.Pet.IsAdopted))
            .ReverseMap();
    }
}
