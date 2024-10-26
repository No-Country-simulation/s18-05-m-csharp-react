using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.AdoptionRequest;

namespace AdoPet.Application.Contracts.Services
{
    public interface IAdoptionRequestService
    {
        Task<BaseResponse<AdoptionRequestDto>> AddAdoptionRequest(AdoptionRequestDto adoptionRequest, int idUser);
        Task<IEnumerable<AdoptionRequestGetAllDto>> GetAdoptionRequest(int userId);
        Task<BaseResponse<AdoptionRequestIdDto>> GetAdoptionRequestById(int id, int userId);
        Task<BaseResponse<string>> UpdateAdoptionRequest(AdoptionRequestUpdateDto adoptionRequestUpdateDto, int id);
        Task<BaseResponse<bool>> DeleteAdoptionRequest(int id,int userId);
    }
}
