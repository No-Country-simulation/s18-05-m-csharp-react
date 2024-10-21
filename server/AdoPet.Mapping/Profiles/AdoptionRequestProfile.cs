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
               opt => opt.MapFrom(src => src.Pet.Name)) // Asumiendo que src.Pet tiene una propiedad Name
    .ForMember(dest => dest.PhotoUrl, 
               opt => opt.MapFrom(src => src.Pet.PhotoUrl)) // Asumiendo que src.Pet tiene una propiedad PhotoUrl
    .ForMember(dest => dest.DatePublished, 
               opt => opt.MapFrom(src => src.Pet.DatePublished)) // Ajusta según la propiedad correcta
    .ForMember(dest => dest.DateBirth, 
               opt => opt.MapFrom(src => src.Pet.DateBirth)) // Asumiendo que src.Pet tiene una propiedad DateBirth
    .ForMember(dest => dest.IsAdopted, 
               opt => opt.MapFrom(src => src.Pet.IsAdopted)) // Asumiendo que src.Pet tiene una propiedad IsAdopted
    .ForMember(dest => dest.Adoptable, 
               opt => opt.MapFrom(src => src.Adopter)) // Mapea directamente el adoptador
    .ForMember(dest => dest.Status, 
               opt => opt.MapFrom(src => src.Status)) // Asumiendo que la propiedad Status está disponible en src
    .ForMember(dest => dest.RequestDate, 
               opt => opt.MapFrom(src => src.RequestDate)); // Ajusta según la propiedad correcta


        CreateMap<AdoptionRequest, AdoptionRequestIdDto>()
            .ForMember(dest => dest.Adoptable, opt => opt.MapFrom(src => src.Adopter))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Pet.Name))
            .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Pet.Gender))
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Pet.PhotoUrl))
            .ForMember(dest => dest.AnimalType, opt => opt.MapFrom(src => src.Pet.AnimalType))
            .ForMember(dest => dest.IsAdopted, opt => opt.MapFrom(src => src.Pet.IsAdopted))
            .ReverseMap();
    }
}
