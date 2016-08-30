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
        
        [Authorize(Roles = "EndUser")]
        public ActionResult EndUser()
        {
           return View();
        }

        [Authorize(Roles = "ProductOwner")]
        public ActionResult ProductOwner()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public ActionResult Admin()
        {
            return View();
        }


    }
}