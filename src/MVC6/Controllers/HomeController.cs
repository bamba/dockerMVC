using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;

namespace MVC6.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        static List<Cartitem> cart = new List<Cartitem>();
        // GET: Cart
        [HttpGet]
        public List<Cartitem> Get()
        {
            return cart;
        }

        [HttpPost]
        public List<Cartitem> Add(string Product, int Quantity, double Price)
        {
            var cartItem = new Cartitem
            {
                Price = Price,
                Product = Product,
                Quantity = Quantity
            };
            cart.Add(cartItem);
            
            return cart;
        }

        //public List<Cartitem> Remove(Cartitem cartItem)
        public List<Cartitem> Remove(string Product, int Quantity, double Price)
        {
            var cartItem = new Cartitem
            {
                Price = Price,
                Product = Product,
                Quantity = Quantity
            };
            var item = cart.FirstOrDefault(c => c.Product == cartItem.Product);
            if (item != null)
            {
                cart.Remove(item);
            }
           
            return cart;
        }
    }

    public class Cartitem
    {
        public string Product { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }
}
