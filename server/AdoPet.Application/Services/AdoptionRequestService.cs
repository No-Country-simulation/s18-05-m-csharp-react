using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs.AdoptionRequest;
using AdoPet.Domain.Entities;
using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.User;
using AdoPet.Domain.Enums;
using AutoMapper;
using AdoPet.Application.SendGrid;

namespace AdoPet.Application.Services;

public class AdoptionRequestService : IAdoptionRequestService
{
    private readonly IAdoptionRequestRepository _adoptionRequestRepository;
    private readonly IEmailService _emailService;
    private readonly IMapper _mapper;

    public AdoptionRequestService(IAdoptionRequestRepository adoptionRequestRepository, IMapper mapper, IEmailService emailService)
    {
        _adoptionRequestRepository = adoptionRequestRepository;
        _mapper = mapper;
        _emailService = emailService;
    }

    public async Task<BaseResponse<AdoptionRequestDto>> AddAdoptionRequest(AdoptionRequestDto adoptionRequest, int idUser)
    {
        var response = new BaseResponse<AdoptionRequestDto>();

        try
        {
            var mappedEntity = _mapper.Map<AdoptionRequest>(adoptionRequest);
            mappedEntity.UserId = idUser;
            mappedEntity.Status = AdoptionRequestStatus.Pending;

            var newRequest = await _adoptionRequestRepository.AddAsync(mappedEntity);
            response.Data = _mapper.Map<AdoptionRequestDto>(newRequest);
            response.Success = true;
            response.Message = "Adoption request added successfully.";
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<IEnumerable<AdoptionRequestGetAllDto>> GetAdoptionRequest(int userId)
    {
       
        var adoptionRequests = await _adoptionRequestRepository.GetAllWithDetailsAsync(userId);
        return _mapper.Map<IEnumerable<AdoptionRequestGetAllDto>>(adoptionRequests);
    }

    public async Task<BaseResponse<AdoptionRequestIdDto>> GetAdoptionRequestById(int id, int userId)
    {
        var response = new BaseResponse<AdoptionRequestIdDto>();

        try
        {
            if (!await _adoptionRequestRepository.AdoptionRequestIdExistsAsync(id))
            {
                response.Success = false;
                response.Message = "Adoption request not found.";
                return response;
            }
            
            var adoption = await _adoptionRequestRepository.GetById(id,userId);
            var userDto = _mapper.Map<UserDto>(adoption.Adopter);
            var adoptionDto = _mapper.Map<AdoptionRequestIdDto>(adoption);
            adoptionDto.Adoptable = userDto;

            response.Data = adoptionDto;
            response.Success = true;
            response.Message = "Adoption request found.";
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<BaseResponse<string>> UpdateAdoptionRequest(AdoptionRequestUpdateDto adoptionRequestUpdateDto, int id)
    {
        var response = new BaseResponse<string>();

        try
        {

            if (!await _adoptionRequestRepository.AdoptionRequestIdExistsAsync(id))
            {
                response.Success = false;
                response.Message = "Adoption request not found.";
                return response;
            }

            var existingAdoption = await _adoptionRequestRepository.GetByIdWithOwner(id);
            if (adoptionRequestUpdateDto.Status == AdoptionRequestStatus.Approved)
            {
                var sendMailResult = await _emailService.SendEmailWithReplyTo(existingAdoption);

                if (!sendMailResult)
                {
                    response.Success = false;
                    response.Message = "Failed to send email.";
                    return response;
                }
                existingAdoption.Pet.IsAdopted = true;


            }

            _mapper.Map(adoptionRequestUpdateDto, existingAdoption);

            _adoptionRequestRepository.Update(existingAdoption);
            await _adoptionRequestRepository.SaveChangesAsync();

            response.Success = true;
            response.Message = "Adoption request updated successfully.";
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public async Task<BaseResponse<bool>> DeleteAdoptionRequest(int id,int userId)
    {
        var response = new BaseResponse<bool>();

        try
        {
            var result = await _adoptionRequestRepository.GetById(id,userId);

            if (result.Status != AdoptionRequestStatus.Pending)
            {
                response.Success = false;
                response.Message = "Delete request only allowed in pending state.";
                response.Data = false;
                return response;
            }

            bool deleteSuccessful = await _adoptionRequestRepository.DeleteAsync(id);
            response.Success = deleteSuccessful;
            response.Message = deleteSuccessful ? "Adoption request deleted successfully." : "Failed to delete adoption request.";
            response.Data = deleteSuccessful;
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }
}
