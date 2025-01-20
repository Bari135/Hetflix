using jetflix.Server.Models;
using Newtonsoft.Json;

namespace jetflix.Server.Services
{
    public class searchAdapter
    {
        private readonly tvmazeSearchService _tvMazeService;

        public searchAdapter(tvmazeSearchService tvMazeService)
        {
            _tvMazeService = tvMazeService;
        }
        public async Task<List<tvmazeResponse>> SearchShowsAsync(string query)
        {
            var jsonResponse = await _tvMazeService.GetShowsAsync(query);
            var res = JsonConvert.DeserializeObject<List<tvmazeResponse>>(jsonResponse);
            return res;

        }
        public async Task<List<tvMazeEpisodeResponse>> SearchEpisodesAsync(int id)
        {
            var jsonResponse = await _tvMazeService.GetEpisodesAsync(id);
            var res = JsonConvert.DeserializeObject<List<tvMazeEpisodeResponse>>(jsonResponse);
            return res;

        }
    }
}
