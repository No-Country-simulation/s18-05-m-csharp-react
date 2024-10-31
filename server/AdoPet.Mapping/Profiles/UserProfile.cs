using AutoMapper;
using AdoPet.Application.DTOs.Identity;
using AdoPet.Domain.Entities;
using AdoPet.Application.DTOs.User;

namespace AdoPet.Mapping.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<RegisterDto, User>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));

        CreateMap<User, UserDto>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName));
    }
}
