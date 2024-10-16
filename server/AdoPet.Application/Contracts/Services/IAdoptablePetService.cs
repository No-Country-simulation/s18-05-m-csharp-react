using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.AdoptablePet;

namespace AdoPet.Application.Contracts.Services;

public interface IAdoptablePetService
{

    Task<BaseResponse<AdoptablePetDto>> AddAdoptablePet(AdoptablePetDto adoptablePet, int idUser);
    Task<IEnumerable<AdoptablePetGetAllDto>> GetAdoptablePets();
    Task<BaseResponse<AdoptablePetIdDto>> GetAdoptablePetById(int id);
    Task<BaseResponse<bool>> DeleteAdoptablePet(int id);
    Task<BaseResponse<AdoptablePetDto>> UpdateAdoptablePet(AdoptablePetUpdateDto adoptablePetUpdateDto, int id);

}
