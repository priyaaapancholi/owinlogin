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
    public class Owners1Controller : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Owners1
        public IEnumerable<Owner> GetOwners()
        {
            return db.Owners.ToList();
        }

        //// GET: api/Owners1/5
        //[ResponseType(typeof(Owner))]
        //public IHttpActionResult GetOwner(int id)
        //{
        //    Owner owner = db.Owners.Find(id);
        //    if (owner == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(owner);
        //}

        //// PUT: api/Owners1/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutOwner(int id, Owner owner)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != owner.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(owner).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OwnerExists(id))
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
       
        // POST: api/Owners1
        [ResponseType(typeof(Owner))]
        public IHttpActionResult PostOwner(Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            db.Owners.Add(owner);
            db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = owner.Id }, owner);
        }

        //// DELETE: api/Owners1/5
        //[ResponseType(typeof(Owner))]
        //public IHttpActionResult DeleteOwner(int id)
        //{
        //    Owner owner = db.Owners.Find(id);
        //    if (owner == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Owners.Remove(owner);
        //    db.SaveChanges();

        //    return Ok(owner);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool OwnerExists(int id)
        //{
        //    return db.Owners.Count(e => e.Id == id) > 0;
        //}
    }
}