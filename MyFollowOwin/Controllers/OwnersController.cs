using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MyFollowOwin.Models;
using Microsoft.AspNet.Identity;

namespace MyFollowOwin.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class OwnersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
       
        
       
        ApplicationUser user = new ApplicationUser();
        
        //GET: api/Owners
        public IEnumerable<ApplicationUser> GetApplicationUsers()
        {
            return db.Users.ToList();
        }

        // GET: api/ApplicationUsers/5
        //[ResponseType(typeof(ApplicationUser))]
        //public IHttpActionResult GetApplicationUser(string id)
        //{
        //    ApplicationUser applicationUser = db.Users.Find(id);
        //    if (applicationUser == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(applicationUser);

        //}

        // PUT: api/ApplicationUsers/5
        [ResponseType(typeof(void))]
        [Route]
        public IHttpActionResult PutApplicationUser(string id, ApplicationUser applicationUser)
        {
            id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            applicationUser.Id = user.Id;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != applicationUser.Id)
            {
                return BadRequest();
            }

            db.Entry(applicationUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {

                throw;

            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        //POST: api/Owners
        [Route]
        [ResponseType(typeof(ApplicationUser))]
        public IHttpActionResult PostApplicationUser(ApplicationUser applicationUser)
        {
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            applicationUser.Id = user.Id;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(applicationUser);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                throw;
            }

            return CreatedAtRoute("DefaultApi", new { id = applicationUser.Id }, applicationUser);
        }

        //// DELETE: api/ApplicationUsers/5
        //[ResponseType(typeof(ApplicationUser))]
        //public IHttpActionResult DeleteApplicationUser(string id)
        //{
        //    ApplicationUser applicationUser = db.ApplicationUsers.Find(id);
        //    if (applicationUser == null)
        //    {
        //        return NotFound();
        //    }

        //    db.ApplicationUsers.Remove(applicationUser);
        //    db.SaveChanges();

        //    return Ok(applicationUser);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool ApplicationUserExists(string id)
        //{
        //    return db.ApplicationUsers.Count(e => e.Id == id) > 0;
        //}
    }
}