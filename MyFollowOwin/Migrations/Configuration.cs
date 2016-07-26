namespace MyFollowOwin.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MyFollowOwin.Models.ApplicationDbContext>
    {
        public enum Roles { Admin,EndUser,ProductOwner}
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MyFollowOwin.Models.ApplicationDbContext context)
        {
            var Roles = Enum.GetNames(typeof(Roles));
            foreach (var role in Roles)
            {
                if (!context.Roles.Any(r => r.Name == role))
                {
                    var store = new RoleStore<IdentityRole>(context);
                    var manager = new RoleManager<IdentityRole>(store);
                    var roles = new IdentityRole { Name = role };

                    manager.Create(roles);
                }
            }


            //if (!context.Roles.Any(r => r.Name == "Admin"))
            //{
            //    var store = new RoleStore<IdentityRole>(context);
            //    var manager = new RoleManager<IdentityRole>(store);
            //    var userManager = new UserManager<ApplicationUser>(new UserStore<AUser>(context));

            //    var role = new IdentityRole { Name = "Admin" };

            //    manager.Create(role);


            //    var user = new ApplicationUser { UserName = "Priya" };


            //    if (userManager.FindByName("Priya") == null)
            //    {
            //        var result = userManager.Create(user, "Pp1234.");

            //        if (result.Succeeded)
            //        {
            //            userManager.AddToRole(user.Id, "Admin");
            //        }

            //    }
            //}




            //if (!context.Roles.Any(r => r.Name == "EndUsers"))
            //{
            //    var store = new RoleStore<IdentityRole>(context);
            //    var manager = new RoleManager<IdentityRole>(store);
            //    var role = new IdentityRole { Name = "EndUsers" };

            //    manager.Create(role);
            //}

            //if (!context.Roles.Any(r => r.Name == "ProductOwners"))
            //{
            //    var store = new RoleStore<IdentityRole>(context);
            //    var manager = new RoleManager<IdentityRole>(store);
            //    var role = new IdentityRole { Name = "ProductOwners" };

            //    manager.Create(role);
            //}

        }
    }
}
