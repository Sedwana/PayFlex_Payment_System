using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PayFlexCheckoutSystem.Server.Models;
using PayFlexCheckoutSystem.Server.Services;

namespace PayFlexCheckoutSystem.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PayFlexController : ControllerBase
    {
        private readonly IPaymentServices _service;

        public PayFlexController(IPaymentServices service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var payments = await _service.GetAllPayment();
            return Ok(payments);
        }

        [HttpGet("paymentId:Guid")]
        public async Task<IActionResult> GetById(Guid paymentId)
        {
            var payment = await _service.GetPaymentById(paymentId);
            if (payment == null) { return NotFound(); }
            return Ok(payment);
        }

        [HttpPost("simulate-comfirmation/{paymentId:guid}")]
        public async Task<IActionResult> SimulateConfirmation(Guid paymentId)
        {

        }

    }
}
