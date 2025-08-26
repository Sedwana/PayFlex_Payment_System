import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export const fetchPayments = () => axios.get(`${API_BASE}/api/payments`);
export const createPayment = (payload) => axios.post(`${API_BASE}/api/payments`, payload);
export const confirmPayment = (paymentId) => axios.post(`${API_BASE}/api/payments/simulate-confirmation/${paymentId}`);
