namespace UtopiaApi.Models;

public class Location 
{
  public int LocationId { get; set; }
  public string Description { get; set; }
  public string Street { get; set; }
  public string City { get; set; }
  public string State { get; set; }
  public string ZipCode { get; set; }
  public long Lattitude { get; set; }
  public long Longitude { get; set; }
}