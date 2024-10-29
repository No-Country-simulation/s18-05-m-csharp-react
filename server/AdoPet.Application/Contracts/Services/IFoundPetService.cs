using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.FoundPet;

namespace AdoPet.Application.Contracts.Services;

public interface IFoundPetService
{


    Task<BaseResponse<FoundPetCreateDto>> AddFoundPet(FoundPetCreateDto foundPet, int idUser);
    Task<IEnumerable<FoundPetGetAllDto>> GetFoundPets();
    Task<BaseResponse<FoundPetIdDto>> GetFoundPetById(int id);
    Task<BaseResponse<bool>> DeleteFoundPet(int id);
   // Task<BaseResponse<FoundPetDto>> UpdateFoundPet(FoundPetUpdateDto foundPetUpdateDto, int id);
}
