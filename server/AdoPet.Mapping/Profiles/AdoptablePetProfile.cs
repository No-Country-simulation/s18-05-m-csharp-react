using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Domain.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Mapping.Profiles
{
    public class AdoptablePetProfile : Profile
    {

        public AdoptablePetProfile()
        {

            CreateMap<AdoptablePetDto, AdoptablePet>();
            CreateMap<AdoptablePet, AdoptablePetDto>().ReverseMap();
        }

    }
}
