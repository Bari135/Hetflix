namespace jetflix.Server.Models
{
    public class Episode
    {
        public int id { get; set; }
        public string url { get; set; }
        public string name { get; set; }
        public int season { get; set; }

        public string airdate { get; set; }
        public int runtime { get; set; }
        public string image { get; set; }
        public string summary { get; set; }
    }
}
