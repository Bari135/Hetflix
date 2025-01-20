namespace jetflix.Server.Models
{
    public class tvMazeEpisodeResponse
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Name { get; set; }
        public int Season { get; set; }
        public int Number { get; set; }
        public string Type { get; set; }
        public string Airdate { get; set; }
        public string Airtime { get; set; }
        public DateTime Airstamp { get; set; }
        public int Runtime { get; set; }
        public Rating Rating { get; set; }
        public Image Image { get; set; }
        public string Summary { get; set; }
        
    }

    public class epRating
    {
        public double? Average { get; set; }
    }

    public class epImage
    {
        public string Medium { get; set; }
        public string Original { get; set; }
    }

}
