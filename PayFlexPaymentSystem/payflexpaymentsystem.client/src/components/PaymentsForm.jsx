import React, { useState } from "react";

export default function PaymentForm({ onCreate }) {
    const [customerId, setCustomerId] = useState("");
    const [amount, setAmount] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!customerId || Number(amount) <= 0) {
            alert("Enter valid CustomerId and positive amount");
            return;
        }
        onCreate({ customerId, amount: Number(amount) });
        setCustomerId("");
        setAmount("");
    };

    return (
        <form onSubmit={submit} className="form">
            <div>
                <label>CustomerId</label>
                <input value={customerId} onChange={e => setCustomerId(e.target.value)} />
            </div>
            <div>
                <label>Amount</label>
                <input value={amount} onChange={e => setAmount(e.target.value)} type="number" step="0.01" />
            </div>
            <button type="submit">Create Payment</button>
        </form>
    );
}
