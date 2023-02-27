namespace UtopiaApi.Models
{
    public class RequestDto
    {
        public int RequestId { get; set; }
        public string RequestStatus { get; set; }
        public string RequestDescription { get; set; }
        public int LocationId { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }


    }
}