using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class Follow : CommonProperty
    {


            public string UserId { get; set; }
            [ForeignKey("UserId")]
            public ApplicationUser Users { get; set; }


            public int ProductId { get; set; }
            [ForeignKey("ProductId")]
            public Product Products { get; set; }

        }
    }
