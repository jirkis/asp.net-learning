using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

using Omu.AwesomeMvc;

namespace Mvc5Awesome.ViewModels.Input
{
    public class AcctTabJirkaInput
    {
        [Required]
        public string AACCT { get; set; }
        [Required]
        public long ABAL { get; set; }
        [Required]
        public int AWDL_START { get; set; }
    }
}