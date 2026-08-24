import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "../styles/Expenses.css";

function Expenses() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const totalExpense = expenses.reduce(
        (total, expense) => total + Number(expense.amount),
        0
    );

    return (
        <div className="expenses-page">
            <h1>Expense Management</h1>

            <div className="expense-summary">
                <h2>Total Expenses</h2>
                <p>₹ {totalExpense.toLocaleString()}</p>
            </div>

            <ExpenseForm onAddExpense={addExpense} />

            <ExpenseTable
                expenses={expenses}
                onDeleteExpense={deleteExpense}
            />
        </div>
    );
}

export default Expenses;