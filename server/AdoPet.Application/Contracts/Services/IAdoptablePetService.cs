using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.AdoptablePet;

namespace AdoPet.Application.Contracts.Services;

public interface IAdoptablePetService
{

    Task<BaseResponse<AdoptablePetDto>> AddAdoptablePet(AdoptablePetDto adoptablePet);
    Task<IEnumerable<AdoptablePetDto>> GetAdoptablePets();
    Task<BaseResponse<AdoptablePetDto>> GetAdoptablePetById(int id);
    Task<BaseResponse<bool>> DeleteAdoptablePet(int id);
    Task<BaseResponse<AdoptablePetDto>> UpdateAdoptablePet(AdoptablePetUpdateDto adoptablePetUpdateDto, int id);

}
