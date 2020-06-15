using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Test.Models;

namespace Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarController : Controller
    {
        public IActionResult CreateCar()
        {
            return View("CreateCar");
        }

        [HttpGet]
        public List<Car> Get()
        {
            return CarStorage.Cars;
        }

        [HttpPost]
        public void Create(Car car)
        {
            CarStorage.Cars.Add(car);
        }
    }
}
