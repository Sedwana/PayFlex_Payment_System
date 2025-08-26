import React from "react";

export default function PaymentList({ payments, onConfirm }) {
    if (!payments?.length) return <p>No payments yet.</p>;

    return (
        <table className="payments-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>CreatedAt</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {payments.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.customerId}</td>
                        <td>{p.amount}</td>
                        <td>{p.status}</td>
                        <td>{new Date(p.createdAt).toLocaleString()}</td>
                        <td>
                            {p.status === "Pending" ? <button onClick={() => onConfirm(p.id)}>Confirm</button> : "—"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
