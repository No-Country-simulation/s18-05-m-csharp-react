using CloudinaryDotNet.Actions;
using CloudinaryDotNet;
using AdoPet.Application.Contracts.Cloudinary;
using AdoPet.Cloudinary.Helpers;
using Microsoft.AspNetCore.Http;

namespace AdoPet.Cloudinary.Services;

public class CloudinaryService : ICloudinaryService
{
    private readonly CloudinaryDotNet.Cloudinary _cloudinary;


    public CloudinaryService(CloudinarySettings cloudinary)
    {
        var cloudAccount = new Account(cloudinary.Cloud, cloudinary.ApiKey, cloudinary.ApiSecret);
        _cloudinary = new CloudinaryDotNet.Cloudinary(cloudAccount);
    }

    public async Task<string?> UploadMedia(IFormFile file)
    {
        if (file is null || file.Length == 0)
        {
            return null;
        }

        using var stream = file.OpenReadStream();

        var uploadParams = ConfigureImageTransformation(
            new Transformation()
                .Height(250)
                .Width(250)
                .Crop("scale"),
            stream,
            file.FileName
        );

        try
        {
            return await Upload(uploadParams);
        }
        catch (Exception)
        {
            return null;
        }
    }

    private async Task<string?> Upload(RawUploadParams uploadParams)
    {
        var uploadResult = await _cloudinary.UploadAsync(uploadParams);
        return uploadResult.Url.ToString();
    }

    private ImageUploadParams ConfigureImageTransformation(Transformation transformation, Stream stream, string name)
    {
        var uploadParams = new ImageUploadParams
        {
            File = new FileDescription(name, stream),
            Transformation = transformation
        };
        return uploadParams;
    }

}