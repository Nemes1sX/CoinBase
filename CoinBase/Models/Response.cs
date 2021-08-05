using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoinBase.Models
{
    public class Response
    { 
        public object data { get; set; }
        public string currenncy { get; set; }
        public List<string> rate { get; set; }

    }
}
