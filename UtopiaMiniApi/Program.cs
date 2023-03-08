using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<RequestDb>(opt => opt.UseInMemoryDatabase("Request"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();

app.MapGet("/requestitems", async (RequestDb db) =>
    await db.Requests.ToListAsync());

app.MapGet("/requestitems/complete", async (RequestDb db) =>
    await db.Requests.Where(t => t.IsComplete).ToListAsync());

app.MapGet("/requestitems/{id}", async (int id, RequestDb db) =>
    await db.Requests.FindAsync(id)
        is Request request
            ? Results.Ok(request)
            : Results.NotFound());

app.MapPost("/requestitems", async (Request request, RequestDb db) =>
{
    db.Requests.Add(request);
    await db.SaveChangesAsync();

    return Results.Created($"/requestitems/{request.Id}", request);
});

app.MapPut("/requestitems/{id}", async (int id, Request inputRequest, RequestDb db) =>
{
    var request = await db.Requests.FindAsync(id);

    if (request is null) return Results.NotFound();

    request.Name = inputRequest.Name;
    request.IsComplete = inputRequest.IsComplete;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/requestitems/{id}", async (int id, RequestDb db) =>
{
    if (await db.Requests.FindAsync(id) is Request request)
    {
        db.Requests.Remove(request);
        await db.SaveChangesAsync();
        return Results.Ok(request);
    }

    return Results.NotFound();
});

app.Run();









