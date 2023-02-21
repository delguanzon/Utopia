﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UtopiaApi.Models;

#nullable disable

namespace utopiaapi.Migrations
{
    [DbContext(typeof(UtopiaDbContext))]
    [Migration("20230221080737_UpdateClassRelationships")]
    partial class UpdateClassRelationships
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("UtopiaApi.Models.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("longtext");

                    b.Property<string>("Description")
                        .HasColumnType("longtext");

                    b.Property<long>("Lattitude")
                        .HasColumnType("bigint");

                    b.Property<long>("Longitude")
                        .HasColumnType("bigint");

                    b.Property<string>("State")
                        .HasColumnType("longtext");

                    b.Property<string>("Street")
                        .HasColumnType("longtext");

                    b.Property<string>("ZipCode")
                        .HasColumnType("longtext");

                    b.HasKey("LocationId");

                    b.ToTable("Location");
                });

            modelBuilder.Entity("UtopiaApi.Models.Request", b =>
                {
                    b.Property<int>("RequestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("RequestDescription")
                        .HasColumnType("longtext");

                    b.Property<string>("RequestStatus")
                        .HasColumnType("longtext");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.Property<int?>("UserInfoId")
                        .HasColumnType("int");

                    b.HasKey("RequestId");

                    b.HasIndex("LocationId");

                    b.HasIndex("UserId");

                    b.HasIndex("UserInfoId");

                    b.ToTable("Requests");
                });

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

                    b.Property<string>("contactNumber")
                        .HasColumnType("longtext");

                    b.HasKey("UserInfoId");

                    b.ToTable("UserInfos");
                });

            modelBuilder.Entity("UtopiaApi.Models.Request", b =>
                {
                    b.HasOne("UtopiaApi.Models.Location", "Location")
                        .WithMany("Requests")
                        .HasForeignKey("LocationId");

                    b.HasOne("UtopiaApi.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.HasOne("UtopiaApi.Models.UserInfo", null)
                        .WithMany("Requests")
                        .HasForeignKey("UserInfoId");

                    b.Navigation("Location");

                    b.Navigation("User");
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

            modelBuilder.Entity("UtopiaApi.Models.Location", b =>
                {
                    b.Navigation("Requests");
                });

            modelBuilder.Entity("UtopiaApi.Models.UserInfo", b =>
                {
                    b.Navigation("Requests");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
