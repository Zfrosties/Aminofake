using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AminoFakeApp
{
    public class Fact
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public bool IsProcessed { get; set; }
        public bool IsFake { get; set; }
    }
}
