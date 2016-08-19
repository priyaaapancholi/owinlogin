using MyFollowOwin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using MyFollowOwin;
using System.Web.Http;
using MyFollowOwin.App_Start;
//using System.Data.Entity;

namespace MyFollowOwin
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            //RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //ApplicationDbContext context = new ApplicationDbContext();
            //Roles.SeedIdentity(context);
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);






            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            GlobalConfiguration.Configuration.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);






            //HttpConfiguration config = GlobalConfiguration.Configuration;
            //config.Formatters.JsonFormatter.SerializerSettings.Formatting =
            //    Newtonsoft.Json.Formatting.Indented;

            //config.Formatters.JsonFormatter.SerializerSettings.Converters.Add
            //    (new Newtonsoft.Json.Converters.StringEnumConverter());

        }
    }
}
