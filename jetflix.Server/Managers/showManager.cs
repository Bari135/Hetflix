using jetflix.Server.Builders;
using jetflix.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace jetflix.Server.Managers
{
    public class showManager
    {
        private readonly searchAdapter _searchAdapter;
        private readonly showBuilder _showBuilder;
        private readonly episodeBuilder _epispdeBuilder;

        public showManager(searchAdapter searchAdapter, showBuilder showBuilder, episodeBuilder episodeBuilder)
        {
            _searchAdapter = searchAdapter;
            _showBuilder = showBuilder;
            _epispdeBuilder = episodeBuilder;
        }

        public async Task<IActionResult> manageShowSearch(string query)
        {
            try
            {
                var jsonResponse = await _searchAdapter.SearchShowsAsync(query);
                var shows = _showBuilder.BuildShows(jsonResponse);
                return new OkObjectResult(shows);
            }
            catch
            {
                return new StatusCodeResult(500);
            }
        }

        public async Task<IActionResult> manageEpisodeSearch(int id)
        {
            try
            {
                var jsonResponse = await _searchAdapter.SearchEpisodesAsync(id);
                var episodes = _epispdeBuilder.BuildEpisode(jsonResponse);
                return new OkObjectResult(episodes);
            }
            catch
            {
                return new StatusCodeResult(500);
            }
        }
    }
}
