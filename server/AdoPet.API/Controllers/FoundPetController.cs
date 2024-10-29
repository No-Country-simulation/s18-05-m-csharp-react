using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Application.DTOs;
using Microsoft.AspNetCore.Mvc;
using AdoPet.Application.Services;
using System.Security.Claims;
using AdoPet.Application.DTOs.FoundPet;


namespace AdoPet.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FoundPetController : ControllerBase
{

    private readonly IFoundPetService _foundPetService;


    public FoundPetController(IFoundPetService foundPetService)
    {
        _foundPetService = foundPetService;
    }
   
    [HttpGet]
    public async Task<ActionResult> GetFoundPets()
    {
        try
        {
            var foundPets = await _foundPetService.GetFoundPets();
            return Ok(foundPets);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FoundPetCreateDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost]
    public async Task<ActionResult<AdoptablePetCreateDto>> AddFoundPet(FoundPetCreateDto adoptablePet)
    {
        try
        {
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var result = await _foundPetService.AddFoundPet(adoptablePet, int.Parse(userId));
            return Ok(result);

        }
        catch (Exception ex)
        {

            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }


    }
}
