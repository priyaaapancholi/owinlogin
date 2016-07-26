using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public enum Platform { Mobile, IOT, Web }
    public class Product : CommonProperty
    {

        [Required]
        public string ProductName { get; set; }

        [MaxLength(200)]
        public string Description { get; set; }

        public Platform Type { get; set; }

        [Required]
        [Url]
        public string HomepageURL { get; set; }

        [Required]
        [Url]
        public string AppstoreURL { get; set; }

        [Required]
        [Url]
        public string PlaystoreURL { get; set; }

        //refers relation between productowner and product..
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }


        //refers relation between product and productupdates(details)..
        public virtual ICollection<ProductUpdate> ProductUpdate { get; set; }

        //refers relation between user and followproducts..
        public virtual ICollection<Follow> Folllow { get; set; }
    }

    }