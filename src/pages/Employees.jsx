import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Employees.css";

function Employees() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const employees = [
        {
            id: 1,
            name: "Arun Kumar",
            role: "Site Engineer",
            phone: "+91 9876543210",
            email: "arun@gmail.com",
            location: "Chennai",
            status: "Active",
        },
        {
            id: 2,
            name: "Ravi Kumar",
            role: "Supervisor",
            phone: "+91 9876543211",
            email: "ravi@gmail.com",
            location: "Madurai",
            status: "Active",
        },
        {
            id: 3,
            name: "Karthik",
            role: "Worker",
            phone: "+91 9876543212",
            email: "karthik@gmail.com",
            location: "Coimbatore",
            status: "Inactive",
        },
    ];

    const filteredEmployees = employees.filter((employee) => {
        const search = searchTerm.toLowerCase();

        return (
            employee.name.toLowerCase().includes(search) ||
            employee.role.toLowerCase().includes(search) ||
            employee.email.toLowerCase().includes(search) ||
            employee.location.toLowerCase().includes(search)
        );
    });

    const activeEmployees = employees.filter(
        (employee) => employee.status === "Active"
    ).length;

    const inactiveEmployees = employees.filter(
        (employee) => employee.status === "Inactive"
    ).length;

    return (
        <div className="employees-page">

            {/* Header */}

            <div className="employees-header">

                <div>
                    <p className="employees-label">
                        EMPLOYEE MANAGEMENT
                    </p>

                    <h1>
                        Employees
                    </h1>

                    <p>
                        Manage construction project employees and workers.
                    </p>
                </div>

                <button
                    className="add-employee-btn"
                    onClick={() =>
                        navigate("/employees/add")
                    }
                >
                    + Add Employee
                </button>

            </div>

            {/* Summary Cards */}

            <div className="employees-summary">

                <div className="employee-summary-card">
                    <span>
                        Total Employees
                    </span>

                    <strong>
                        {employees.length}
                    </strong>
                </div>

                <div className="employee-summary-card">
                    <span>
                        Active Employees
                    </span>

                    <strong>
                        {activeEmployees}
                    </strong>
                </div>

                <div className="employee-summary-card">
                    <span>
                        Inactive Employees
                    </span>

                    <strong>
                        {inactiveEmployees}
                    </strong>
                </div>

            </div>

            {/* Search */}

            <div className="employees-search-section">

                <div className="employees-search-box">

                    <span>
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search employees, role or location..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />

                </div>

            </div>

            {/* Employee Table */}

            <div className="employees-table-container">

                <table className="employees-table">

                    <thead>
                    <tr>
                        <th>
                            Employee
                        </th>

                        <th>
                            Role
                        </th>

                        <th>
                            Phone
                        </th>

                        <th>
                            Location
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>

                    <tbody>

                    {filteredEmployees.length > 0 ? (

                        filteredEmployees.map((employee) => (

                            <tr key={employee.id}>

                                {/* Employee */}

                                <td>

                                    <div className="employee-name-cell">

                                        <div className="employee-avatar">
                                            {employee.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>
                                                {employee.name}
                                            </strong>

                                            <small>
                                                {employee.email}
                                            </small>
                                        </div>

                                    </div>

                                </td>

                                {/* Role */}

                                <td>
                                    {employee.role}
                                </td>

                                {/* Phone */}

                                <td>
                                    {employee.phone}
                                </td>

                                {/* Location */}

                                <td>
                                    {employee.location}
                                </td>

                                {/* Status */}

                                <td>

                                    <span
                                        className={`employee-status ${
                                            employee.status.toLowerCase()
                                        }`}
                                    >
                                        {employee.status}
                                    </span>

                                </td>

                                {/* Actions */}

                                <td>

                                    <button
                                        className="employee-view-btn"
                                        onClick={() =>
                                            navigate(
                                                `/employees/${employee.id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="employee-edit-btn"
                                        onClick={() =>
                                            navigate(
                                                `/employees/${employee.id}/edit`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="6"
                                className="no-employees"
                            >
                                No employees found
                            </td>

                        </tr>

                    )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Employees;