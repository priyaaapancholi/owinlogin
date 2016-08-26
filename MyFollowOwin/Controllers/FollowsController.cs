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
using System.Web;
using Microsoft.AspNet.Identity.Owin;

namespace MyFollowOwin.Controllers
{
    public class FollowsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        //GET: api/Follows
        public IQueryable<Follow> GetFollows()
        {

            return db.Follows;
        }

        //// GET: api/Follows/5
        //[ResponseType(typeof(Follow))]
        //public IHttpActionResult GetFollow(string id)
        //{
        //    Follow follow = db.Follows.Find(id);
        //    if (follow == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(follow);
        //}

        //// PUT: api/Follows/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutFollow(string id, Follow follow)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != follow.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(follow).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FollowExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Follows
        [ResponseType(typeof(Follow))]
        public IHttpActionResult PostFollow([FromBody]int productId)
        {
            Follow follow = new Follow();
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            follow.UserId = user.Id;
            follow.ProductId = productId;
            follow.CreatedDate = DateTime.Now;
            follow.LastModifiedDate = DateTime.Now;
            //follow.Status = true;


            var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            //var Id = User.Identity.GetUserId();
            bool ProductOwner = userManager.IsInRole(id, "ProductOwner");
            bool EndUser = userManager.IsInRole(id, "EndUser");

            //List<Product> products = db.Products.ToList();
            //foreach (var follow1 in db.Follows.ToList())
            //{
                if (ProductOwner)
                {
                    follow.OwnerStatusBit = true;
                }

                if (EndUser)
                {
                    follow.UserStatusBit = true;
                }
           // }



            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Follows.Add(follow);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                //if (FollowExists(follow.Id))
                //{
                //    return Conflict();
                //}
                //else
                //{
                    throw;
                //}
            }

            return CreatedAtRoute("DefaultApi", new { id = follow.Id }, follow);
        }

    
        
        // DELETE: api/Follows/5
        [ResponseType(typeof(Follow))]
        public IHttpActionResult DeleteFollow(int id)
        {
            //Product p1 = db.Products.Find(id);
            var Id = User.Identity.GetUserId();
            Follow follow1 = new Follow();
            foreach (Follow follower in db.Follows.ToList())
            {
                if ((follower.UserId == Id) && (follower.ProductId == id))
                { follow1 = follower; }
            }

            if (follow1 == null)
            {
                return NotFound();
            }

            db.Follows.Remove(follow1);
            db.SaveChanges();

            return Ok(follow1);
        }




        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        //private bool FollowExists(int id)
        //{
        //    return db.Follows.Count(e => e.Id == id) > 0;
        //}
    }
}