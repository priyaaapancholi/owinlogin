namespace sMyFollowOwin.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using MyFollowOwin.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using static MyFollowOwin.Models.ApplicationUser;

    internal sealed class Configuration : DbMigrationsConfiguration<MyFollowOwin.Models.ApplicationDbContext>
    {
        public enum Roles { Admin, EndUser, ProductOwner }
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





            var user = new ApplicationUser
            {
                UserName = "Priya",
                Email = "xyz@promactinfo.com",
                EmailConfirmed = true,
                DOB = Convert.ToDateTime("08-08-2016"),
                Owner = new Owner(),
                Address = new AddressInfo
                {
                    Street1 = "7,jay mangal soc.,nr.uma char rasta",
                    Street2 = "waghodia road",
                    CityName = "vadodara",
                    StateName = "gujarat",
                    PIN = 390019,
                    ContactNo = "1234567890"
                }
            };
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            if (userManager.FindByName("Priya") == null)
            {
                var result = userManager.Create(user, "Pp@1234");

                if (result.Succeeded)
                {
                    userManager.AddToRole(user.Id, "Admin");
                }

            }



        }
    }
}
