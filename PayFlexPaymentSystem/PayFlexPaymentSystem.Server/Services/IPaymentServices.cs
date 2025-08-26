using PayFlexCheckoutSystem.Server.Models;

namespace PayFlexCheckoutSystem.Server.Services
{
    public class IPaymentServices
    {
        public interface IPaymentService
        {
            Task<PayFlexModel> CreatePayment(PayFlexModel payment);
            Task<IEnumerable<PayFlexModel>> GetAllPayment();
            Task<PayFlexModel> ComfirmPayment(Guid paymentId);
            Task<PayFlexModel> GetPaymentById(Guid paymentId);
        }
    }
}
