
import React, { useEffect, useState } from "react";
import { fetchPayments, createPayment, confirmPayment } from "./api";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";

export default function App() {
    const [payments, setPayments] = useState([]);
    const [statusMsg, setStatusMsg] = useState("");

    const loadPayments = async () => {
        try {
            const res = await fetchPayments();
            setPayments(res.data);
            setStatusMsg("");
        } catch (err) {
            setStatusMsg("Failed to load payments");
        }
    };

    useEffect(() => { loadPayments(); }, []);

    const handleCreate = async (payload) => {
        try {
            await createPayment(payload);
            setStatusMsg("Payment created");
            await loadPayments();
        } catch {
            setStatusMsg("Failed to create payment");
        }
    };

    const handleConfirm = async (id) => {
        try {
            await confirmPayment(id);
            setStatusMsg("Payment confirmed");
            await loadPayments();
        } catch {
            setStatusMsg("Failed to confirm payment");
        }
    };

    return (
        <div className="container">
            <h1>PaymentOrchestrator (React 19)</h1>
            <PaymentForm onCreate={handleCreate} />
            {statusMsg && <p>{statusMsg}</p>}
            <PaymentList payments={payments} onConfirm={handleConfirm} />
        </div>
    );
}
