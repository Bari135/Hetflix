using jetflix.Server.Models;
using Newtonsoft.Json;

namespace jetflix.Server.Builders
{
    public class episodeBuilder
    {

        public List<Episode> BuildEpisode(List<tvMazeEpisodeResponse> jsonResponse)
        {
           
            if (jsonResponse != null && jsonResponse.Count > 0)
            {
                // Map the deserialized objects into the Show model
                var episodes = jsonResponse?.Select(result => new Episode
                {
                    id = result.Id,
                    url = result.Url,
                    name = result.Name,
                    season = result.Season,
                    airdate = result.Airdate,
                    runtime = result.Runtime,
                    image = result.Image != null ? result.Image.Medium : null,
                    summary = result.Summary
                });
                return episodes.ToList();

            }
            else
            {
                return new List<Episode>();
            }
        }
    }
}
