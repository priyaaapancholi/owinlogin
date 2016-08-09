using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public int FoundedYear { get; set; }
        public string Description { get; set; }
        public string WebsiteUrl { get; set; }
    }
}