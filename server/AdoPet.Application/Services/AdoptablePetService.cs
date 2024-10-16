using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Application.DTOs.User;
using AdoPet.Domain.Entities;
using AutoMapper;

namespace AdoPet.Application.Services;

public class AdoptablePetService : IAdoptablePetService
{

    private readonly IAdoptablePetRepository _adoptablePetRepository;
    private readonly IMapper _mapper;



    public AdoptablePetService(IAdoptablePetRepository adoptablePetRepository, IMapper mapper)
    {
        _adoptablePetRepository = adoptablePetRepository;
        _mapper = mapper;
    }



    public async Task<BaseResponse<AdoptablePetDto>> AddAdoptablePet(AdoptablePetDto adoptablePet, int idUser)
    {

        BaseResponse<AdoptablePetDto> response = new BaseResponse<AdoptablePetDto>();

        try
        {

            var mappedEntity = _mapper.Map<AdoptablePet>(adoptablePet);
            mappedEntity.UserId = idUser;
            var newPet = await _adoptablePetRepository.AddAsync(mappedEntity);
            response.Data = _mapper.Map<AdoptablePetDto>(newPet);
            response.Success = true;
            response.Message = "Pet added successfully";

        }

        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }
        return response;

    }


    public async Task<BaseResponse<bool>> DeleteAdoptablePet(int id)
    {

        BaseResponse<bool> response = new BaseResponse<bool>();

        try
        {
            var deleteResult = await _adoptablePetRepository.DeleteAsync(id);

            if (deleteResult)
            {
                response.Success = true;
                response.Message = "Pet deleted successfully";
            }
            else
            {
                response.Success = false;
                response.Message = "Pet not found";
            }
        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }
        return response;

    }

    public async Task<BaseResponse<AdoptablePetIdDto>> GetAdoptablePetById(int id)
    {
        BaseResponse<AdoptablePetIdDto> response = new BaseResponse<AdoptablePetIdDto>();

        try
        {

            var pet = await _adoptablePetRepository.PetIdExistsAsync(id);

            if (!pet)
            {
                response.Success = false;
                response.Message = "Pet not found";
            }
            else
            {
                var AdoptablePet = await _adoptablePetRepository.GetById(id);
                var User = _mapper.Map<UserDto>(AdoptablePet.Owner);
                var AdoptablePetDto = _mapper.Map<AdoptablePetIdDto>(AdoptablePet);
                AdoptablePetDto.Owner = User;
                response.Data = AdoptablePetDto;
                response.Success = true;
                response.Message = "Pet found";
            }

        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;

        }
        return response;


    }

    public async Task<BaseResponse<AdoptablePetDto>> UpdateAdoptablePet(AdoptablePetUpdateDto adoptablePetUpdateDto, int id)
    {
        BaseResponse<AdoptablePetDto> baseResponse = new BaseResponse<AdoptablePetDto>();
        try
        {
            var petExists = await _adoptablePetRepository.PetIdExistsAsync(id);

            if (!petExists)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Pet not found";
            }
            else
            {
                var existingPet = await _adoptablePetRepository.GetByIdAsync(id);
                _mapper.Map(adoptablePetUpdateDto, existingPet);
                _adoptablePetRepository.Update(existingPet);
                await _adoptablePetRepository.SaveChangesAsync();
                baseResponse.Data = _mapper.Map<AdoptablePetDto>(existingPet);
                baseResponse.Success = true;
                baseResponse.Message = "Pet updated successfully";
            }
        }
        catch (Exception ex)
        {
            baseResponse.Success = false;
            baseResponse.Message = ex.Message;
        }
        return baseResponse;
    }

    public async Task<IEnumerable<AdoptablePetGetAllDto>> GetAdoptablePets()
    {
        var pets = await _adoptablePetRepository.GetAllAsync();
        var adoptablePetsDto = _mapper.Map<IEnumerable<AdoptablePetGetAllDto>>(pets);
        return adoptablePetsDto;
    }
}
