using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class Car : Vehicle
    {
        public Car()
        {

        }
        
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Engine { get; set; }
        [Required]
        public int Doors { get; set; }
        [Required]
        public int Wheels { get; set; }
        [Required]
        public string BodyType { get; set; }
    }
}
