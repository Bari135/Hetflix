using Newtonsoft.Json;

namespace jetflix.Server.Models
{
    public class tvmazeResponse
    {
        public double Score { get; set; }
        public tvmazeShow show{ get; set; }
    }

    public class tvmazeShow
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Language { get; set; }
        public List<string> Genres { get; set; }

        public Rating Rating { get; set; }
        public Image Image { get; set; }
        public string Summary { get; set; }

    }

    public class Rating
    {
        public double? Average { get; set; }
    }


    public class Image
    {
        public string Medium { get; set; }
        public string Original { get; set; }
    }
}
