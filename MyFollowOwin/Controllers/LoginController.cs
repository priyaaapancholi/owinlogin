using MyFollowOwin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFollowOwin.Controllers
{
    public class LoginController : Controller
    {

        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Login
        public ActionResult Index()
        {
            ApplicationUser user = TempData["mydata"] as ApplicationUser;
            var userd = user;
            return View(userd);
           
        }


        //public ActionResult Ownershipform()
        //{
        //    return View();
        //}


        public ActionResult Admin()
        {
            return View();
        }


    }
}