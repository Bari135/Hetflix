namespace jetflix.Server.Models
{
    public class Show
    {
        public string showName { get; set; }
        public List<string> generes { get; set; }
        public double rating { get; set; }
        public string image { get; set; }
        public int id { get; set; }

        public string language { get; set; }
        public string url { get; set; }
        public string summary { get; set; }
    }
}
