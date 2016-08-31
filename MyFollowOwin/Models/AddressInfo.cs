using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class AddressInfo
    {
        [Required]
        public string Street1 { get; set; }

        [Required]
        public string Street2 { get; set; }

        [Required]
        public string CityName { get; set; }

        [Required]
        public string StateName { get; set; }

        [Required]
        public int PIN { get; set; }

        [Required]
        [Range(1000000000, 9999999999, ErrorMessage = "number should contain only 10 digits")]

        public long ContactNo { get; set; }

    }
}