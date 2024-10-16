using AdoPet.API;

var builder = WebApplication.CreateBuilder(args);

var app = builder
    .ConfigureServices()
    .ConfigurePipeline();

app.MapGet("/", () => "Ado Pet API");

app.Run();
