import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!category || !description || !amount || !date) {
            alert("Please fill all fields");
            return;
        }

        const newExpense = {
            id: Date.now(),
            category,
            description,
            amount,
            date,
        };

        onAddExpense(newExpense);

        setCategory("");
        setDescription("");
        setAmount("");
        setDate("");
    };

    return (
        <div className="expense-form">
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Materials">Materials</option>
                        <option value="Workers">Workers</option>
                        <option value="Transport">Transport</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;