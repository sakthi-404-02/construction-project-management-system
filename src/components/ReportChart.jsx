import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function ReportChart({ expenses, payments }) {
    const data = [
        {
            name: "Expenses",
            amount: expenses,
        },
        {
            name: "Payments",
            amount: payments,
        },
    ];

    return (
        <div className="report-chart">

            <h2>Expenses vs Payments</h2>

            <div className="chart-container">

                <ResponsiveContainer
                    width="100%"
                    height={350}
                >
                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                            fill="#2563eb"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default ReportChart;