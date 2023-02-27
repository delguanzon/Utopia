namespace UtopiaApi.Models;

    public class UserInfo
    {
        public int UserInfoId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string contactNumber { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<Request> Requests { get; set; }
    }
