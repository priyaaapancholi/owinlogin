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
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Web;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MyFollowOwin.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class OwnersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
       
        
       
        ApplicationUser user = new ApplicationUser();

        //GET: api/Owners
        [Authorize]
        public IQueryable<ApplicationUser> GetApplicationUsers()
        {
            var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            List<ApplicationUser> Users = db.Users.ToList();

            foreach (ApplicationUser user in Users.ToList())
            {
                if (!((userManager.IsInRole(user.Id, "EndUser")) && (user.Owner.CompanyName != null)))
                {
                    Users.Remove(user);
                }
            }
            //string[] usersInRole =RoleProvider.GetUsersInRole("EndUser");
            return Users.AsQueryable();

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

        ////PUT: api/ApplicationUsers/5
        //[ResponseType(typeof(void))]
        //[Route]
        //public IHttpActionResult PutApplicationUser(string id, ApplicationUser applicationUser)
        //{
        //    id = User.Identity.GetUserId();
        //    ApplicationUser user = db.Users.Find(id);
        //    applicationUser.Id = user.Id;
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != applicationUser.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(applicationUser).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {

        //        throw;

        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}



        //PUT: api/ApplicationUsers/5
        [ResponseType(typeof(void))]
        [Route]
        [HttpPut]
        public IHttpActionResult PutApplicationUser(string id, ApplicationUser applicationUser)
        {
            var state = db.Users.FirstOrDefault(x => x.Id == id);
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //if (id != applicationUser.Id)
            //{
            //    return BadRequest();
            //}
            //id = User.Identity.GetUserId();
            //ApplicationUser user = db.Users.Find(id);
            //applicationUser.Id = user.Id;

            if (state != null)
            {
                var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
                ApplicationUser po = db.Users.Find(id);
                user = db.Users.Find(po.Id);
                UserManager.RemoveFromRole(user.Id, "EndUser");
                UserManager.AddToRole(user.Id, "ProductOwner");
            }

            //db.Entry(applicationUser).State = EntityState.Modified;

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
        [ResponseType(typeof(Owner))]
        public IHttpActionResult PostApplicationUser(Owner owner)
        {
           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            user.Owner = owner;
            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ApplicationUserExists(user.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            //catch (DbEntityValidationException dbEx)
            //{
            //    foreach (var validationErrors in dbEx.EntityValidationErrors)
            //    {
            //        foreach (var validationError in validationErrors.ValidationErrors)
            //        {
            //            Trace.TraceInformation("Property: {0} Error: {1}",
            //                                    validationError.PropertyName,
            //                                    validationError.ErrorMessage);
            //        }
            //    }
            //}

            return CreatedAtRoute("DefaultApi", new { id = user.Id }, owner);
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

        private bool ApplicationUserExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}