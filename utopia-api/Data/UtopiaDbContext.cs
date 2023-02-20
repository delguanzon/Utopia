using Microsoft.EntityFrameworkCore;

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
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<Request> Requests { get; set; }
    }
}