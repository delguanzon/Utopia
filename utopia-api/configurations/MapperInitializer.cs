using AutoMapper;
using UtopiaApi.Models;
namespace UtopiaApi.Configurations;

public class MapperInitializer : Profile 
{
    public MapperInitializer()
    {
        CreateMap<User, UserDto>().ReverseMap();
        // CreateMap<Request, RequestDto>();
        // CreateMap<RequestDto, Request>();
    }
}