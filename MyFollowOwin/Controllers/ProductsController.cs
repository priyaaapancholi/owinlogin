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

namespace MyFollowOwin.Controllers
{
    public class ProductsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();


 //----------------------------------------------GET(PRODUCT)--------------------------------------------------------------        

        // GET: api/Products
        public IEnumerable<Product> GetProducts()
        {
            //return db.Products.ToList();
            var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            var Id = User.Identity.GetUserId();
            bool ProductOwner = userManager.IsInRole(Id, "ProductOwner");
            bool EndUser = userManager.IsInRole(Id, "EndUser");

            List<Product> products = db.Products.ToList();
            foreach (var product in products.ToList())
            {
                if (ProductOwner)
                {
                    if (product.UserId != Id)
                        products.Remove(product);
                }
             
                if (EndUser)
                {
                    return db.Products.ToList();
                }
            }

            return products.AsQueryable();
        }
       


   

      


    
       //GET: api/Products/5
       //[ResponseType(typeof(Product))]
       [HttpGet]
        public IQueryable<Product> GetProduct(int id)
        {
            var Id = User.Identity.GetUserId();
            List<Product> products = new List<Product>();

            var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();

            bool ProductOwner = userManager.IsInRole(Id, "ProductOwner");
            bool EndUser = userManager.IsInRole(Id, "EndUser");
            foreach (var product in db.Products.ToList())
            {
                if (ProductOwner)
                {
                    if (product.UserId != Id)
                        products.Add(product);
                }


            }


            if (EndUser)
            {
                foreach (var follower in db.Follows.ToList())
                {
                    if (follower.UserId == Id)
                    {
                        Product product = db.Products.Find(follower.ProductId);
                        products.Add(product);
                    }

                }
            }
            return products.AsQueryable();
        }

  //----------------------------------------------------------------------------------------------------------------     








 //--------------------------------------------------PUT(PRODUCT)--------------------------------------------------------          

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            DateTime Now = DateTime.Now;
            product.LastModifiedDate = Now;
            //var uid = User.Identity.GetUserId();
            //ApplicationUser user = db.Users.Find(uid);
            //product.UserId = user.Id;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
//----------------------------------------------------------------------------------------------------------------

        
        
        
        
        

            
            
            
            
            
            
            
//----------------------------------------POST(PRODUCT)-------------------------------------------------------------------       
        
        
        // POST: api/Products
        [ResponseType(typeof(Product))]
        [Route]
        [HttpPost]
        public IHttpActionResult PostProduct(Product product)
        { 
            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            product.UserId = user.Id;
            product.CreatedDate = DateTime.Now; 
            product.LastModifiedDate = DateTime.Now; 
           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Products.Add(product);

            try
            {
                db.SaveChanges();
            }


            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Debug.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Debug.WriteLine("- Property: \"{0}\", Value: \"{1}\", Error: \"{2}\"",
                            ve.PropertyName,
                            eve.Entry.CurrentValues.GetValue<object>(ve.PropertyName),
                            ve.ErrorMessage);
                    }
                }
                throw;
            }


            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

//---------------------------------------------------------------------------------------------------------------




            
            

            
            
//-----------------------------------------------DELETE(PRODUCT)-----------------------------------------------------------


       // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }




//----------------------------------------------------------------------------------------------------------








      protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.Id == id) > 0;
        }
    }
}