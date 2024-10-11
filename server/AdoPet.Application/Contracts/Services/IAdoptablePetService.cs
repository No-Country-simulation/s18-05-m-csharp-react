using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdoPet.Application.Contracts.Services
{
    public interface IAdoptablePetService
    {

        Task<BaseResponse<AdoptablePetDto>> AddAdoptablePet(AdoptablePetDto adoptablePet);
        Task<IEnumerable<AdoptablePetDto>> GetAdoptablePets();
        Task<BaseResponse<AdoptablePetDto>> GetAdoptablePetById(int id);
        Task<BaseResponse<bool>> DeleteAdoptablePet(int id);
        Task<BaseResponse<AdoptablePetDto>> UpdateAdoptablePet(AdoptablePetUpdateDto adoptablePetUpdateDto, int id);

    }
}
