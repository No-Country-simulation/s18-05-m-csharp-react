using AdoPet.Application.Contracts.Cloudinary;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdoPet.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CloudinaryController : ControllerBase
{
    private readonly ICloudinaryService _cloudinaryService;
    public CloudinaryController(ICloudinaryService cloudinaryService)
    {
        _cloudinaryService = cloudinaryService;
    }

    /// <summary>
    /// Uploads an image file to Cloudinary and returns the URL of the uploaded image.
    /// </summary>
    /// <param name="media">The image file to be uploaded. Must be provided as multipart/form-data.</param>
    /// <returns>A URL of the uploaded image if successful, otherwise a BadRequest with an error message.</returns>
    /// <response code="200">Returns the URL of the uploaded image.</response>
    /// <response code="400">The upload failed, and an error message is returned.</response>
    [HttpPost("UploadPhoto")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(string))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
    public async Task<IActionResult> UploadPhoto(IFormFile media)
    {
        var result = await _cloudinaryService.UploadMedia(media);

        if (string.IsNullOrEmpty(result))
        {
            return BadRequest(new { photoUrl = "" });
        }

        return Ok(new { photoUrl = result });
    }
}
