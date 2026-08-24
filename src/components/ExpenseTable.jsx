function ExpenseTable({ expenses, onDeleteExpense }) {
    return (
        <div className="expense-table">
            <h2>Expense List</h2>

            {expenses.length === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                            <td>₹ {Number(expense.amount).toLocaleString()}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button
                                    onClick={() => onDeleteExpense(expense.id)}
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

export default ExpenseTable;