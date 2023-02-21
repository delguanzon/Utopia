namespace UtopiaApi.Models;

public class Request 
{
  public int RequestId { get; set; } 
  public string RequestStatus { get; set; }
  public string RequestDescription { get; set; }
  public Location Location { get; set; }
  public User User { get; set; }
}