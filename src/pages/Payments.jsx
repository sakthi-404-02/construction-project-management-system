import { useState } from "react";

import PaymentForm from "../components/PaymentForm";
import PaymentTable from "../components/PaymentTable";

import "../styles/Payments.css";

function Payments() {
    const [payments, setPayments] = useState([]);

    const addPayment = (payment) => {
        setPayments([...payments, payment]);
    };

    const deletePayment = (id) => {
        setPayments(
            payments.filter((payment) => payment.id !== id)
        );
    };

    const totalPayment = payments.reduce(
        (total, payment) => total + Number(payment.amount),
        0
    );

    const cashPayments = payments
        .filter((payment) => payment.paymentMethod === "Cash")
        .reduce(
            (total, payment) => total + Number(payment.amount),
            0
        );

    const onlinePayments = payments
        .filter(
            (payment) =>
                payment.paymentMethod === "UPI" ||
                payment.paymentMethod === "Bank Transfer"
        )
        .reduce(
            (total, payment) => total + Number(payment.amount),
            0
        );

    return (
        <div className="payments-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="payments-header">

                <div>

                    <p className="payments-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Payment Management
                    </h1>

                    <p className="payments-description">
                        Track and manage all project-related payments.
                    </p>

                </div>

            </div>


            {/* =========================
                SUMMARY CARDS
            ========================= */}

            <div className="payments-summary">

                <div className="payment-summary-card">

                    <span>
                        Total Payments
                    </span>

                    <strong>
                        ₹ {totalPayment.toLocaleString()}
                    </strong>

                </div>


                <div className="payment-summary-card">

                    <span>
                        Cash Payments
                    </span>

                    <strong>
                        ₹ {cashPayments.toLocaleString()}
                    </strong>

                </div>


                <div className="payment-summary-card">

                    <span>
                        Online Payments
                    </span>

                    <strong>
                        ₹ {onlinePayments.toLocaleString()}
                    </strong>

                </div>

            </div>


            {/* =========================
                PAYMENT FORM
            ========================= */}

            <PaymentForm
                onAddPayment={addPayment}
            />


            {/* =========================
                PAYMENT TABLE
            ========================= */}

            <PaymentTable
                payments={payments}
                onDeletePayment={deletePayment}
            />

        </div>
    );
}

export default Payments;