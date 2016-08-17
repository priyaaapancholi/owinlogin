using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public abstract class CommonProperty
    {
        [Key]
       // [Required]
        //[DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime LastModifiedDate { get; set; }
    }
}