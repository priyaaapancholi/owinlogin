using MyFollowOwin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyFollowOwin.Controllers
{
    public class TestController : ApiController
    {

        ApplicationDbContext db = new ApplicationDbContext();
        public string Post(ApplicationUser user)
        {
           
            db.Users.Add(user);
            db.SaveChanges();
            return "Form submitted successfully!";
        }

        // GET api/<controller>
        //
        //public IEnumerable<ApplicationUser> Get()
        //{
        //   return 
        //}

        // GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<controller>
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}
    }
}