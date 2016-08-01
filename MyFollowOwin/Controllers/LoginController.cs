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
        public ActionResult EndUser()
        {
            return View();
        }


        public ActionResult Ownershipform()
        {
            return View();
        }


    }
}