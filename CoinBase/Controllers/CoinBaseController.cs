using CoinBase.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace CoinBase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinBaseController : ControllerBase
    {
        [HttpGet]
        [Route("fetch")]
        public async Task<object>  fetch()
        {
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync("https://api.coinbase.com/v2/exchange-rates?currency=BTC");
            if (response.IsSuccessStatusCode )
            {
                var json = await response.Content.ReadAsStringAsync();
               object ratesResponse =  JsonSerializer.Deserialize<Response>(json).data;
               return ratesResponse;
            }
            else
            {
                throw new HttpRequestException(response.ReasonPhrase);
            }
           

        }
    }
}
