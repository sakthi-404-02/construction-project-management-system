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
        setExpenses(
            expenses.filter((expense) => expense.id !== id)
        );
    };

    const totalExpense = expenses.reduce(
        (total, expense) => total + Number(expense.amount),
        0
    );

    const materialExpenses = expenses
        .filter((expense) => expense.category === "Materials")
        .reduce(
            (total, expense) => total + Number(expense.amount),
            0
        );

    const workerExpenses = expenses
        .filter((expense) => expense.category === "Workers")
        .reduce(
            (total, expense) => total + Number(expense.amount),
            0
        );

    return (
        <div className="expenses-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="expenses-header">

                <div>

                    <p className="expenses-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Expense Management
                    </h1>

                    <p className="expenses-description">
                        Track and manage all project-related expenses.
                    </p>

                </div>

            </div>


            {/* =========================
                SUMMARY CARDS
            ========================= */}

            <div className="expenses-summary">

                <div className="expense-summary-card">

                    <span>
                        Total Expenses
                    </span>

                    <strong>
                        ₹ {totalExpense.toLocaleString()}
                    </strong>

                </div>


                <div className="expense-summary-card">

                    <span>
                        Material Expenses
                    </span>

                    <strong>
                        ₹ {materialExpenses.toLocaleString()}
                    </strong>

                </div>


                <div className="expense-summary-card">

                    <span>
                        Worker Expenses
                    </span>

                    <strong>
                        ₹ {workerExpenses.toLocaleString()}
                    </strong>

                </div>

            </div>


            {/* =========================
                ADD EXPENSE FORM
            ========================= */}

            <ExpenseForm
                onAddExpense={addExpense}
            />


            {/* =========================
                EXPENSE TABLE
            ========================= */}

            <ExpenseTable
                expenses={expenses}
                onDeleteExpense={deleteExpense}
            />

        </div>
    );
}

export default Expenses;