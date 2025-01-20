using jetflix.Server.Builders;
using jetflix.Server.Managers;
using jetflix.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace jetflix.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class showsController : ControllerBase
    {
        private readonly showManager _showManager;

        public showsController(showManager showManager)
        {
            _showManager = showManager;
        }

        // Endpoint to search for TV shows by name
        [HttpGet("search")]
        public async Task<IActionResult> SearchShows([FromQuery] string query)
        {
            return await _showManager.manageShowSearch(query);
        }

    }
}
