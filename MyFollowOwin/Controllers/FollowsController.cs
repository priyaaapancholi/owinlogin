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
    public class FollowsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        //// GET: api/Follows
        //public IQueryable<Follow> GetFollows()
        //{

        //    return db.Follows;
        //}

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
        public IHttpActionResult PostFollow(Follow follow)
        {

            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            follow.UserId = user.Id;
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
                if (FollowExists(follow.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = follow.Id }, follow);
        }

        //// DELETE: api/Follows/5
        //[ResponseType(typeof(Follow))]
        //public IHttpActionResult DeleteFollow(string id)
        //{
        //    Follow follow = db.Follows.Find(id);
        //    if (follow == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Follows.Remove(follow);
        //    db.SaveChanges();

        //    return Ok(follow);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool FollowExists(string id)
        {
            return db.Follows.Count(e => e.Id == id) > 0;
        }
    }
}