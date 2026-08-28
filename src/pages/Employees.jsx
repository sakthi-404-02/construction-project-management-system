import EmployeeTable from "../components/EmployeeTable";
import "../styles/Employees.css";

function Employees() {
    const employees = [
        {
            id: 1,
            name: "Arun Kumar",
            role: "Site Engineer",
            phone: "9876543210",
            status: "Active"
        },
        {
            id: 2,
            name: "Rahul",
            role: "Supervisor",
            phone: "9876543211",
            status: "Active"
        },
        {
            id: 3,
            name: "Vijay",
            role: "Construction Worker",
            phone: "9876543212",
            status: "Active"
        },
        {
            id: 4,
            name: "Karthik",
            role: "Electrician",
            phone: "9876543213",
            status: "Inactive"
        }
    ];

    return (
        <div className="employees-page">
            <div className="employees-header">
                <div>
                    <h1>Employees</h1>
                    <p>Manage all employees working on your projects.</p>
                </div>
            </div>

            <div className="employees-card">
                <EmployeeTable employees={employees} />
            </div>
        </div>
    );
}

export default Employees;