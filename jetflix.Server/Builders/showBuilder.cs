using System.Collections.Generic;
using jetflix.Server.Models;
using Newtonsoft.Json;

namespace jetflix.Server.Builders
{
    public class showBuilder
    {
        
        public List<Show> BuildShows(List<tvmazeResponse> jsonResponse)
        {
            
            // Map the deserialized objects into the Show model
            var shows = jsonResponse?.Select(result => new Show
            {
                showName = result.show.Name,
                generes = result.show.Genres,
                rating = result.show.Rating.Average != null ? (double)result.show.Rating.Average :0.0,
                image = result.show.Image != null ? result.show.Image.Medium : null,
                id = result.show.Id,
                language = result.show.Language,
                summary = result.show.Summary

            }).ToList();

            return shows ?? new List<Show>();
        }
    }



    //public List<Show> BuildShows(string jsonResponse)
    //{
    //    var rawResults = JsonConvert.DeserializeObject<List<RawTvMazeResponse>>(jsonResponse);
    //    var shows = new List<Show>();

    //    foreach (var result in rawResults)
    //    {
    //        var tvShow = result.show;

    //        shows.Add(new Show
    //        {
    //            showName = tvShow.name,
    //            generes = tvShow.genres,
    //            rating = tvShow.rating?.average,
    //            image = tvShow.image?.medium
    //        });
    //    }

    //    return shows;
    //}
    //    public class RawTvMazeResponse
    //    {
    //        public double score { get; set; }
    //        public TvShowDetails show { get; set; }
    //    }



    //    public class TvShowDetails
    //    {
    //        public string name { get; set; }
    //        public string[] genres { get; set; }
    //        public Rating rating { get; set; }
    //        public Image image { get; set; }
    //    }

    //    public class Rating
    //    {
    //        public double? average { get; set; }
    //    }

    //    public class Image
    //    {
    //        public string medium { get; set; }
    //        public string original { get; set; }
    //    }
}
