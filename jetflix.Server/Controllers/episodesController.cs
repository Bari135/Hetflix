using jetflix.Server.Builders;
using jetflix.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace jetflix.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class episodesController : ControllerBase
    {
        private readonly searchAdapter _searchAdapter;
        private readonly episodeBuilder _episodeBuilder;


        public episodesController(searchAdapter searchAdapter, episodeBuilder episodeBuilder)
        {
            _searchAdapter = searchAdapter;
            _episodeBuilder = episodeBuilder;
       

        }

        
        [HttpGet]
        public async Task<IActionResult> SearchEpisodes([FromQuery] int id)
        {
            try
            {
                var jsonResponse = await _searchAdapter.SearchEpisodesAsync(id);
                var episodes = _episodeBuilder.BuildEpisode(jsonResponse);
                return Ok(episodes);
            }
            catch
            {
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

    }
}
