using AdoPet.Application.Contracts.Services;
using AdoPet.Application.DTOs.AdoptionRequest;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using AdoPet.Domain.Entities;

namespace AdoPet.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdoptionRequestController : ControllerBase
{
    private readonly IAdoptionRequestService _adoptionRequestService;
    private readonly UserManager<User> _userManager;
    private readonly IAdoptablePetService _adoptablePetService;

    public AdoptionRequestController(IAdoptionRequestService adoptionRequestService,UserManager<User> userManager,IAdoptablePetService adoptablePetService)
    {
        _adoptionRequestService = adoptionRequestService;
        _userManager = userManager;
        _adoptablePetService = adoptablePetService;
    }

    /// <summary>
    /// Get a list of adoption requests.
    /// </summary>
    /// <remarks>This method retrieves all adoption requests.</remarks>
    /// <response code="200">Returns a list of adoption requests.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while retrieving the list of adoption requests.</response>
    /// <returns>A list of adoption requests.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<AdoptionRequestGetAllDto>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [HttpGet]
    [Authorize(Roles = "User")]
    public async Task<ActionResult> GetAdoptionRequest()
    {
        try
        {
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var adoptablePets = await _adoptionRequestService.GetAdoptionRequest(int.Parse(userId));

            if (adoptablePets?.Count()==0)
            {
                return NotFound($"No adoption request found.");
            }

            return Ok(adoptablePets);
        }
        catch (Exception ex)
        {
            // TODO: Log error
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    /// <summary>
    /// Add a new adoption request.
    /// </summary>
    /// <remarks>This method creates a new adoption request.</remarks>
    /// <response code="200">Returns the created adoption request.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while adding the adoption request.</response>
    /// <returns>The created adoption request.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptionRequestDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost]
    [Authorize(Roles = "User")]
    public async Task<ActionResult> AddAdoptionRequest(AdoptionRequestDto adoptionRequestDto)
    {
        try
        {
            var petExists = await _adoptablePetService.GetAdoptablePetById(adoptionRequestDto.AdoptablePetId);
            if (!petExists.Success)
            {
                return NotFound($"No pet found");
            }

            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;

            if (petExists.Data.Owner.Id == userId)
            {
                return BadRequest("The user who published the adoption cannot make the transaction.");
            }

            var result = await _adoptionRequestService.AddAdoptionRequest(adoptionRequestDto, int.Parse(userId));
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    /// <summary>
    /// Gets an adoption request by its ID.
    /// </summary>
    /// <param name="id">The ID of the adoption request to retrieve.</param>
    /// <response code="200">Returns the details of the adoption request.</response>
    /// <response code="404">The adoption request was not found.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while retrieving the adoption request.</response>
    /// <returns>The details of the adoption request.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptionRequestIdDto))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{id}")]
    [Authorize(Roles = "User")]
    public async Task<ActionResult<AdoptionRequestIdDto>> GetAdoptionPetById(int id)
    {
        try
        {
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var adoptionRequest = await _adoptionRequestService.GetAdoptionRequestById(id,int.Parse(userId));

            if (!adoptionRequest.Success)
            {
                return NotFound($"No adoption request found with ID {id}.");
            }

            return Ok(adoptionRequest);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    /// <summary>
    /// Update an existing adoption request.
    /// </summary>
    /// <param name="adoptionRequestUpdateDto">The updated details of the adoption request.</param>
    /// <param name="id">The ID of the adoption request to update.</param>
    /// <response code="200">Returns the updated adoption request.</response>
    /// <response code="400">The request is invalid or the adoption request does not exist.</response>
    /// <response code="404">The adoption request was not found.</response>
    /// <response code="500">An error occurred while updating the adoption request.</response>
    /// <returns>The updated adoption request.</returns>
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AdoptionRequestIdDto))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPut("{id}")]
    [Authorize(Roles = "User")]
    public async Task<ActionResult> UpdateAdoptionRequest(AdoptionRequestUpdateDto adoptionRequestUpdateDto, int id)
    {
        try
        {   
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var adoptionExists = await _adoptionRequestService.GetAdoptionRequestById(id,int.Parse(userId));
            if (!adoptionExists.Success)
            {
                return NotFound($"No adoption request found.");
            }

            var response = await _adoptionRequestService.UpdateAdoptionRequest(adoptionRequestUpdateDto, id);
            if (response.Success)
            {
                return Ok(response.Message);
            }

            return BadRequest(response.Message);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    /// <summary>
    /// Deletes an adoption request by its ID.
    /// </summary>
    /// <param name="id">The ID of the adoption request to delete.</param>
    /// <response code="204">The adoption request was successfully deleted.</response>
    /// <response code="404">The adoption request was not found.</response>
    /// <response code="400">The request is invalid.</response>
    /// <response code="500">An error occurred while deleting the adoption request.</response>
    /// <returns>An empty result.</returns>
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAdoptionRequest(int id)
    {
        try
        {   
            var userId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var adoptionRequestExists = await _adoptionRequestService.GetAdoptionRequestById(id,int.Parse(userId));
            if (!adoptionRequestExists.Success)
            {
                return NotFound($"No adoption request found with ID {id}.");
            }

            var response = await _adoptionRequestService.DeleteAdoptionRequest(id,int.Parse(userId));
            if (response.Success)
            {
                Response.Headers.Add("X-Delete-Message", response.Message);
                return NoContent();
            }

            return BadRequest(response.Message);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
