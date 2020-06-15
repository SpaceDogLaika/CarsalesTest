using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using Test.Controllers;
using Test.Models;

namespace UnitTests
{
    [TestClass]
    public class UnitTests
    {

        [TestMethod]
        public void Test_Index_View()
        {
            var controller = new HomeController();
            var result = controller.Index() as ViewResult;
            Assert.AreEqual("Index", result.ViewName);
        }

        [TestMethod]
        public void Test_Create_Car_View()
        {
            var controller = new CarController();
            var result = controller.CreateCar() as ViewResult;
            Assert.AreEqual("CreateCar", result.ViewName);
        }

        [TestMethod]
        public void Test_Car_Object_Is_Not_Null()
        {
            var controller = new CarController();
            var result = controller.Get();
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void Test_Car_Object_Can_Be_Added()
        {
            var newCar = new Car()
            {
                Id = Guid.NewGuid(),
                Make = "Test Make",
                Model = "Test Model",
                Engine = "Test Engine",
                Doors = 4,
                Wheels = 4,
                BodyType = "Test Body Type"
            };
            var controller = new CarController();

            controller.Create(newCar);
            Assert.AreEqual(newCar, controller.Get().First());
        }
    }
}
