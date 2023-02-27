namespace UtopiaApi.Models;

public class Request 
{
  public int RequestId { get; set; } 
  public string RequestStatus { get; set; }
  public string RequestDescription { get; set; }
  public int LocationId { get; set; }
  public UserInfo UserInfo { get; set; }
}