namespace jetflix.Server.Services
{
    public class tvmazeSearchService
    {
        private readonly HttpClient _httpClient;

        public tvmazeSearchService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<string> GetShowsAsync(string query)
        {
            
            var response = await _httpClient.GetAsync($"https://api.tvmaze.com/search/shows?q={query}");
            response.EnsureSuccessStatusCode(); // Throw an exception if not successful
            return await response.Content.ReadAsStringAsync();
            
        }

        public async Task<string> GetEpisodesAsync(int id)
        {

            var response = await _httpClient.GetAsync($"https://api.tvmaze.com/shows/{id}/episodes");
            response.EnsureSuccessStatusCode(); // Throw an exception if not successful
            return await response.Content.ReadAsStringAsync();

        }
    }
}
