using Microsoft.EntityFrameworkCore;
using PayFlexCheckoutSystem.Server.Models;

namespace PayFlexCheckoutSystem.Server.Data
{
    public class PaymentsDbContext
    {
        public PaymentsDbContext(DbContextOptions<PaymentsDbContext> options) : base(options) 
        {
        }

        public DbSet<PayFlexModel> payments { get; set; } = null;

        
    }
}
