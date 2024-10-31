using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs.AdoptablePet;
using AdoPet.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AdoPet.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdoptablePetController : ControllerBase
{

    private readonly IAdoptablePetService _adoptablePetService;


    public AdoptablePetController(IAdoptablePetService adoptablePetService)
    {
        _adoptablePetService = adoptablePetService;
    }


    /// <summary>
    /// Get a list of adoptable pets.
    /// </summary>
    /// <remarks>
    /// This method retrieves all pets available for adoption.
    /// </remarks>
    /// <response code="200">Returns a list of adoptable pets.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while retrieving the list of adoptable pets.</response>
    /// <returns>A list of adoptable pets.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<AdoptablePetDto>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [HttpGet]
    public async Task<ActionResult> GetAdoptablePets()
    {
        try
        {
            var adoptablePets = await _adoptablePetService.GetAdoptablePets();
            return Ok(adoptablePets);
        }
        catch (Exception ex)
        {
            //TODO: Log error
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }


    }

    /// <summary>
    /// Add a new adoptable pet.
    /// </summary>
    /// <remarks>
    /// This method creates a new pet available for adoption.
    /// </remarks>
    /// <response code="200">Returns the created pet.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while adding the pet.</response>
    /// <returns>The created adoptable pet.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptablePetDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost]
    [Authorize(Roles = "User")]
    public async Task<ActionResult> AddAdoptablePet(AdoptablePetCreateDto adoptablePet)
    {
        try
        {
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var result = await _adoptablePetService.AddAdoptablePet(adoptablePet, int.Parse(userId));
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }


    /// <summary>
    /// Gets an adoptable pet by its ID.
    /// </summary>
    /// <remarks>
    /// This method retrieves the details of a specific pet available for adoption using its unique ID.
    /// </remarks>
    /// <param name="id">The ID of the pet to retrieve.</param>
    /// <response code="200">Returns the details of the adoptable pet.</response>
    /// <response code="404">The pet was not found.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while retrieving the pet.</response>
    /// <returns>The details of the adoptable pet.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptablePet))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{id}")]
    public async Task<ActionResult<AdoptablePetDto>> GetAdoptablePetById(int id)
    {

        try
        {
            var pet = await _adoptablePetService.GetAdoptablePetById(id);

            if (!pet.Success)
            {
                return NotFound($"No pet found with ID {id}.");
            }

            return Ok(pet);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


    /// <summary>
    /// Update an existing adoptable pet.
    /// </summary>
    /// <remarks>
    /// This method updates the details of an existing pet available for adoption.
    /// </remarks>
    /// <param name="adoptablePetUpdateDto">The updated details of the adoptable pet.</param>
    /// <param name="id">The updated details of the adoptable pet.</param>
    /// <response code="200">Returns the updated pet.</response>
    /// <response code="400">The request is invalid or the pet does not exist.</response>
    /// <response code="404">The pet was not found.</response>
    /// <response code="500">An error occurred while updating the pet.</response>
    /// <returns>The updated adoptable pet.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptablePetDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPut("{id}")]
    public async Task<ActionResult<AdoptablePetDto>> UpdateAdoptablePet(AdoptablePetUpdateDto adoptablePetUpdateDto, int id)
    {

        try
        {
            var petExists = await _adoptablePetService.GetAdoptablePetById(id);
            if (!petExists.Success)
            {
                return NotFound($"No pet found");
            }

            var response = await _adoptablePetService.UpdateAdoptablePet(adoptablePetUpdateDto, id);
            if (response.Success)
            {
                return Ok(response.Data);
            }
            else
            {
                return BadRequest(response.Message);
            }

        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }




    /// <summary>
    /// Deletes an adoptable pet by its ID.
    /// </summary>
    /// <remarks>
    /// This method removes a specific pet available for adoption using its unique ID.
    /// </remarks>
    /// <param name="id">The ID of the pet to delete.</param>
    /// <response code="204">The pet was successfully deleted.</response>
    /// <response code="404">The pet was not found.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while deleting the pet.</response>
    /// <returns>An empty result.</returns>
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAdoptablePet(int id)
    {

        try
        {
            var petExists = await _adoptablePetService.GetAdoptablePetById(id);
            if (!petExists.Success)
            {
                return NotFound($"No pet found with ID {id}.");
            }

            var response = await _adoptablePetService.DeleteAdoptablePet(id);
            if (response.Success)
            {
                Response.Headers.Add("X-Delete-Message", response.Message);
                return NoContent();
            }
            else
            {
                return BadRequest(response.Message);
            }

        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }



}
