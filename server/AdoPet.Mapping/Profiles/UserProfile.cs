using AutoMapper;
using AdoPet.Application.DTOs.Identity;
using AdoPet.Domain.Entities;

namespace AdoPet.Mapping.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<RegisterDto, User>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
    }
}
