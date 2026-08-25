import { useState } from "react";

function PaymentForm({ onAddPayment }) {
    const [project, setProject] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !project ||
            !description ||
            !amount ||
            !paymentDate ||
            !paymentMethod
        ) {
            alert("Please fill all fields");
            return;
        }

        const newPayment = {
            id: Date.now(),
            project,
            description,
            amount,
            paymentDate,
            paymentMethod,
        };

        onAddPayment(newPayment);

        setProject("");
        setDescription("");
        setAmount("");
        setPaymentDate("");
        setPaymentMethod("");
    };

    return (
        <div className="payment-form">

            <h2>Add Payment</h2>

            <form onSubmit={handleSubmit}>

                {/* Project */}

                <div>
                    <label>Project Name</label>

                    <input
                        type="text"
                        placeholder="Enter project name"
                        value={project}
                        onChange={(e) =>
                            setProject(e.target.value)
                        }
                    />
                </div>


                {/* Description */}

                <div>
                    <label>Description</label>

                    <input
                        type="text"
                        placeholder="Enter payment description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />
                </div>


                {/* Amount */}

                <div>
                    <label>Amount</label>

                    <input
                        type="number"
                        placeholder="Enter payment amount"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                    />
                </div>


                {/* Date */}

                <div>
                    <label>Payment Date</label>

                    <input
                        type="date"
                        value={paymentDate}
                        onChange={(e) =>
                            setPaymentDate(e.target.value)
                        }
                    />
                </div>


                {/* Payment Method */}

                <div>
                    <label>Payment Method</label>

                    <select
                        value={paymentMethod}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    >
                        <option value="">
                            Select Payment Method
                        </option>

                        <option value="Cash">
                            Cash
                        </option>

                        <option value="UPI">
                            UPI
                        </option>

                        <option value="Bank Transfer">
                            Bank Transfer
                        </option>

                        <option value="Cheque">
                            Cheque
                        </option>

                        <option value="Card">
                            Card
                        </option>
                    </select>
                </div>


                {/* Button */}

                <div>

                    <button type="submit">
                        Add Payment
                    </button>

                </div>

            </form>

        </div>
    );
}

export default PaymentForm;