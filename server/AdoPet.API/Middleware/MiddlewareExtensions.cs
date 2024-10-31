using AdoPet.Application.Exceptions;
using System.Net;
using System.Text.Json;


namespace AdoPet.API.Middleware;
public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseCustomExceptionHandler(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ExceptionHandlerMiddleware>();
    }
}