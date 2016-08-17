using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

        
namespace MyFollowOwin.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }

      

        [Required]
        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }

        
        public AddressInfo Address { get; set; }

        //public string Password { get; set; }

        public Owner Owner { get; set; } 
        
        
        
        
        
        //refers relation between product owner and product..
         public virtual ICollection<Product> product { get; set; }

        ////refers relation between follow product and user
        //public virtual ICollection<Follow> follow { get; set; }





      

      
    }
}