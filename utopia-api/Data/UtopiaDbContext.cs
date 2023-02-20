using Microsoft.EntityFrameworkCore;
using UtopiaApi.Models;

namespace UtopiaApi.Models
{
    public class UtopiaDbContext : DbContext
    {
        public UtopiaDbContext(DbContextOptions<UtopiaDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }

        public DbSet<UtopiaApi.Models.Request> Request { get; set; }
    }
}