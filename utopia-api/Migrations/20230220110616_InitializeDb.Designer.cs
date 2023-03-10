// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UtopiaApi.Models;

#nullable disable

namespace utopiaapi.Migrations
{
    [DbContext(typeof(UtopiaDbContext))]
    [Migration("20230220110616_InitializeDb")]
    partial class InitializeDb
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("UtopiaApi.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasColumnType("longtext");

                    b.Property<int>("UserInfoId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("longtext");

                    b.HasKey("UserId");

                    b.HasIndex("UserInfoId")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("UtopiaApi.Models.UserInfo", b =>
                {
                    b.Property<int>("UserInfoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("longtext");

                    b.Property<string>("FirstName")
                        .HasColumnType("longtext");

                    b.Property<string>("LastName")
                        .HasColumnType("longtext");

                    b.HasKey("UserInfoId");

                    b.ToTable("UserInfo");
                });

            modelBuilder.Entity("UtopiaApi.Models.User", b =>
                {
                    b.HasOne("UtopiaApi.Models.UserInfo", "UserInfo")
                        .WithOne("User")
                        .HasForeignKey("UtopiaApi.Models.User", "UserInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserInfo");
                });

            modelBuilder.Entity("UtopiaApi.Models.UserInfo", b =>
                {
                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
