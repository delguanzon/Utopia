using Microsoft.EntityFrameworkCore;

class RequestDb : DbContext
{
    public RequestDb(DbContextOptions<RequestDb> options)
        : base(options) { }

    public DbSet<Request> Requests => Set<Request>();
}