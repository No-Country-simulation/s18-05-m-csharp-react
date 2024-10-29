using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs;
using AdoPet.Application.DTOs.FoundPet;
using AdoPet.Domain.Entities;
using AutoMapper;

namespace AdoPet.Application.Services;

public class FoundPetService : IFoundPetService
{

    private readonly IFoundPetRepository _foundPetRepository;
    private readonly IMapper _mapper;


    public FoundPetService(IFoundPetRepository foundPetRepository, IMapper mapper)
    {
        _foundPetRepository = foundPetRepository;
        _mapper = mapper;
    }

    public async Task<BaseResponse<FoundPetCreateDto>> AddFoundPet(FoundPetCreateDto foundPet, int idUser)
    {

        BaseResponse<FoundPetCreateDto> response = new BaseResponse<FoundPetCreateDto>();
        try
        {
            var mappedEntity = _mapper.Map<FoundPet>(foundPet);
            mappedEntity.UserId = idUser;
            var newPet = await _foundPetRepository.AddAsync(mappedEntity);
            response.Data = _mapper.Map<FoundPetCreateDto>(newPet);
            response.Success = true;
            response.Message = "Pet found has been successfully published";

        }
        catch (Exception ex)
        {
            response.Success = false;
            response.Message = ex.Message;
        }

        return response;
    }

    public Task<BaseResponse<bool>> DeleteFoundPet(int id)
    {
        throw new NotImplementedException();
    }

    public Task<BaseResponse<FoundPetIdDto>> GetFoundPetById(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<FoundPetGetAllDto>> GetFoundPets()
    {

        var foundPets = await _foundPetRepository.GetAllAsync();
        var foundPetsDto = _mapper.Map<IEnumerable<FoundPetGetAllDto>>(foundPets);
        return foundPetsDto;

    }
}
