using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models;

namespace Test
{
    public class CarStorage
    {
        public static List<Car> Cars { get; set; }

        static CarStorage()
        {
            Cars = new List<Car>();
        }
    }
}
