using AdoPet.Application.Contracts.Persistence;
using AdoPet.Application.Contracts.Services;
using AdoPet.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdoPet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdoptablePetController : ControllerBase
    {

        private readonly IAdoptablePetService _adoptablePetService;


        public AdoptablePetController(IAdoptablePetService adoptablePetService)
        {
            _adoptablePetService = adoptablePetService;
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
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

                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            

        }

        //Create
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        public async Task<ActionResult> AddAdoptablePet(AdoptablePet adoptablePet)
        {
            try
            {
                if (adoptablePet == null)
                {
                    return BadRequest();
                }

                var result = await _adoptablePetService.AddAdoptablePet(adoptablePet);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }




    }
}
