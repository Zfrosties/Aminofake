using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AminoFakeApp
{
    [Route("api/[controller]")]
    public class FactsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        Fact[] facts = new Fact[]
        {
            new Fact{Id=1, Title="Fact 1", Description="Description 1", IsProcessed=true, IsFake=false},
            new Fact{Id=2, Title="Fact 2", Description="Description 2", IsProcessed=true, IsFake=false},
            new Fact{Id=3, Title="Fact 3", Description="Description 3", IsProcessed=false, IsFake=true}
        };

        [HttpGet]
        public IEnumerable<Fact> GetAllFacts()
        {
            return facts;
        }

       /* public IHttpActionResult GetFact(int id)
        {
            var fact = facts.FirstOrDefault((f) => f.Id == id);
            if (fact == null)
                return NotFound();
            return Ok(fact);
        }*/
    }
}
