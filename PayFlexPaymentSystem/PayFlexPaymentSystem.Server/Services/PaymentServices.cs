using Microsoft.EntityFrameworkCore;
using PayFlexCheckoutSystem.Server.Data;
using PayFlexCheckoutSystem.Server.Models;

namespace PayFlexCheckoutSystem.Server.Services
{
    public class PaymentServices : IPaymentServices
    {
        private readonly PaymentsDbContext _context;

        public PaymentServices(PaymentsDbContext context)
        {
            _context = context;
        }

        public async Task<PayFlexModel> CreatePayment(PayFlexModel payment)
        {
            payment.Id = Guid.NewGuid();
            payment.Status = "Pending";
            payment.CreatedAt = DateTime.Now;

            _context.payments.Add(payment);
            return payment;
        }

        public async Task<IEnumerable<PayFlexModel>> GetAllPayments()
        {
            return await _context.payments.AsNoTracking().ToListAsync();
        }

        public async Task<PayFlexModel> ConfirmPayment(Guid paymentId)
        {
            var payment = await _context.payments.FindAsync(paymentId);

            if (payment == null) { return null; }

            return payment;
        }

        public async Task<PayFlexModel> GetPaymentById(Guid paymentId)
        {
            return await _context.payments.AsNoTracking().FirstOrDefaultAsync(p => p.Id == paymentId);
        }
    }
}
