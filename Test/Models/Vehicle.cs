using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class Vehicle
    {
        public Vehicle()
        {

        }

        [Required]
        public string Make { get; set; }
        [Required]
        public string Model { get; set; }
        [Required]
        public VehicleType VehicleType { get; set; }
    }
}
