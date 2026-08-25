function PaymentTable({ payments, onDeletePayment }) {
    return (
        <div className="payment-table">

            <h2>Payment List</h2>

            {payments.length === 0 ? (

                <div className="payment-empty">
                    No payments added yet.
                </div>

            ) : (

                <table>

                    <thead>
                    <tr>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Method</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {payments.map((payment) => (

                        <tr key={payment.id}>

                            <td>
                                {payment.project}
                            </td>

                            <td>
                                {payment.description}
                            </td>

                            <td>
                                    <span className="payment-amount">
                                        ₹ {Number(payment.amount).toLocaleString()}
                                    </span>
                            </td>

                            <td>
                                {payment.paymentDate}
                            </td>

                            <td>
                                    <span className="payment-method">
                                        {payment.paymentMethod}
                                    </span>
                            </td>

                            <td>
                                <button
                                    className="payment-delete-btn"
                                    onClick={() =>
                                        onDeletePayment(payment.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            )}

        </div>
    );
}

export default PaymentTable;
