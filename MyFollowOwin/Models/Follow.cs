using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class Follow:CommonProperty
    {
         //refers relation between user and follow class..
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }

        //refers relation between product and follow class..
        public string ProductId { get; set; }
        [ForeignKey("Id")]
        public virtual Product Product { get; set; }
    }
}