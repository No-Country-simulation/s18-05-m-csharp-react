using Microsoft.AspNetCore.Http;

namespace AdoPet.Application.Contracts.Cloudinary;

public interface ICloudinaryService
{
    Task<string?> UploadMedia(IFormFile file);
}
