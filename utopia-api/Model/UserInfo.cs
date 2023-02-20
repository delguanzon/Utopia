namespace UtopiaApi.Models;

    public class UserInfo
    {
        public int UserInfoId { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public User User { get; set; }
    }
