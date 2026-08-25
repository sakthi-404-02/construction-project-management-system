import ReportChart from "../components/ReportChart";

import "../styles/Reports.css";

function Reports() {
    const totalExpenses = 0;
    const totalPayments = 0;

    const balance = totalPayments - totalExpenses;

    return (
        <div className="reports-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="reports-header">

                <div>

                    <p className="reports-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Reports
                    </h1>

                    <p className="reports-description">
                        View project expenses, payments and financial reports.
                    </p>

                </div>

            </div>


            {/* =========================
                SUMMARY
            ========================= */}

            <div className="reports-summary">

                <div className="report-summary-card">

                    <span>
                        Total Expenses
                    </span>

                    <strong>
                        ₹ {totalExpenses.toLocaleString()}
                    </strong>

                </div>


                <div className="report-summary-card">

                    <span>
                        Total Payments
                    </span>

                    <strong>
                        ₹ {totalPayments.toLocaleString()}
                    </strong>

                </div>


                <div className="report-summary-card">

                    <span>
                        Balance
                    </span>

                    <strong>
                        ₹ {balance.toLocaleString()}
                    </strong>

                </div>

            </div>


            {/* =========================
                CHART
            ========================= */}

            <ReportChart
                expenses={totalExpenses}
                payments={totalPayments}
            />

        </div>
    );
}

export default Reports;