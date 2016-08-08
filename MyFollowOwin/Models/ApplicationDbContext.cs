using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

      

        DbSet<Product> Product { get; set; }
        DbSet<ProductUpdate> ProductUpdate { get; set; }
        DbSet<Follow> Follow { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

       // public System.Data.Entity.DbSet<MyFollowOwin.Models.ApplicationUser> ApplicationUsers { get; set; }

        //public System.Data.Entity.DbSet<MyFollowOwin.Models.ApplicationUser> ApplicationUsers { get; set; }
    }
}