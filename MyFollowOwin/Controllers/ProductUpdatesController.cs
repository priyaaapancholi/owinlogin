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

namespace MyFollowOwin.Controllers
{
   
    public class ProductUpdatesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        List<ProductUpdate> productUpdates = new List<ProductUpdate>();
       
        
        //// GET: api/ProductUpdates
        //public IQueryable<ProductUpdate> GetProductUpdates()
        //{
        //    return db.ProductUpdates;
        //}

       
            
            // GET: api/ProductUpdates/5
        [ResponseType(typeof(ProductUpdate))]
        public IQueryable<ProductUpdate> GetProductUpdate(int id)
        {

            foreach (var productUpdate in db.ProductUpdates.ToList())
            {
                if (productUpdate.ProductId==id)
                {
                    productUpdates.Add(productUpdate); 
                }


            }


            //ProductUpdate productUpdate = db.ProductUpdates.Find(id);
            //if (productUpdate == null)
            //{
            //    return NotFound();
            //}

            return productUpdates.AsQueryable();


        }

        //// PUT: api/ProductUpdates/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutProductUpdate(int id, ProductUpdate productUpdate)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != productUpdate.ProductUpdateId)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(productUpdate).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductUpdateExists(id))
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

        // POST: api/ProductUpdates
        [ResponseType(typeof(ProductUpdate))]
        public IHttpActionResult PostProductUpdate(ProductUpdate productUpdate)
        {
             if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductUpdates.Add(productUpdate);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productUpdate.ProductUpdateId }, productUpdate);
        }

        //// DELETE: api/ProductUpdates/5
        //[ResponseType(typeof(ProductUpdate))]
        //public IHttpActionResult DeleteProductUpdate(int id)
        //{
        //    ProductUpdate productUpdate = db.ProductUpdates.Find(id);
        //    if (productUpdate == null)
        //    {
        //        return NotFound();
        //    }

        //    db.ProductUpdates.Remove(productUpdate);
        //    db.SaveChanges();

        //    return Ok(productUpdate);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool ProductUpdateExists(int id)
        {
            return db.ProductUpdates.Count(e => e.ProductUpdateId == id) > 0;
        }
    }
}