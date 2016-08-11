using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class Owner
    {
        public string CompanyName { get; set; }
        public int FoundedYear { get; set; }
        public string Description { get; set; }
        [Url]
        public string WebsiteUrl { get; set; }
    }
}