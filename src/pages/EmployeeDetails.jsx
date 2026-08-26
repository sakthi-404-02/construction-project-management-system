import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EmployeeDetails.css";

function EmployeeDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const employees = [
        {
            id: "1",
            name: "Arun Kumar",
            role: "Site Engineer",
            phone: "+91 9876543210",
            email: "arun@example.com",
            location: "Chennai",
            joiningDate: "10 Aug 2025",
            status: "Active",
        },
        {
            id: "2",
            name: "Ravi Kumar",
            role: "Project Manager",
            phone: "+91 9876543211",
            email: "ravi@example.com",
            location: "Madurai",
            joiningDate: "15 Jun 2025",
            status: "Active",
        },
        {
            id: "3",
            name: "Karthik",
            role: "Supervisor",
            phone: "+91 9876543212",
            email: "karthik@example.com",
            location: "Coimbatore",
            joiningDate: "20 Mar 2025",
            status: "Inactive",
        },
    ];

    const employee = employees.find(
        (item) => item.id === id
    );

    if (!employee) {
        return (
            <div className="employee-details-page">

                <div className="employee-details-card">

                    <h2>
                        Employee Not Found
                    </h2>

                    <p>
                        The employee you are looking for
                        does not exist.
                    </p>

                    <button
                        className="employee-primary-btn"
                        onClick={() =>
                            navigate("/employees")
                        }
                    >
                        ← Back to Employees
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="employee-details-page">

            {/* Header */}

            <div className="employee-details-header">

                <button
                    className="employee-back-btn"
                    onClick={() =>
                        navigate("/employees")
                    }
                >
                    ← Back to Employees
                </button>

                <div className="employee-title-section">

                    <div>

                        <p className="employee-details-label">
                            EMPLOYEE #{employee.id}
                        </p>

                        <h1>
                            {employee.name}
                        </h1>

                        <p className="employee-role">
                            {employee.role}
                        </p>

                    </div>

                    <span
                        className={`employee-details-status ${
                            employee.status.toLowerCase()
                        }`}
                    >
                        {employee.status}
                    </span>

                </div>

            </div>

            {/* Main Information */}

            <div className="employee-details-card">

                <div className="employee-card-title">

                    <h2>
                        Employee Information
                    </h2>

                    <span>
                        Basic employee details
                    </span>

                </div>

                <div className="employee-info-grid">

                    <div className="employee-info-item">

                        <span>
                            Full Name
                        </span>

                        <strong>
                            {employee.name}
                        </strong>

                    </div>

                    <div className="employee-info-item">

                        <span>
                            Role
                        </span>

                        <strong>
                            {employee.role}
                        </strong>

                    </div>

                    <div className="employee-info-item">

                        <span>
                            Phone Number
                        </span>

                        <strong>
                            {employee.phone}
                        </strong>

                    </div>

                    <div className="employee-info-item">

                        <span>
                            Email Address
                        </span>

                        <strong>
                            {employee.email}
                        </strong>

                    </div>

                    <div className="employee-info-item">

                        <span>
                            Location
                        </span>

                        <strong>
                            {employee.location}
                        </strong>

                    </div>

                    <div className="employee-info-item">

                        <span>
                            Joining Date
                        </span>

                        <strong>
                            {employee.joiningDate}
                        </strong>

                    </div>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="employee-details-card">

                <div className="employee-card-title">

                    <h2>
                        Quick Actions
                    </h2>

                    <span>
                        Manage this employee
                    </span>

                </div>

                <div className="employee-action-buttons">

                    <button
                        className="employee-primary-btn"
                        onClick={() =>
                            navigate("/employees")
                        }
                    >
                        ← Employees
                    </button>

                    <button
                        className="employee-edit-action-btn"
                        onClick={() =>
                            navigate(
                                `/employees/${employee.id}/edit`
                            )
                        }
                    >
                        Edit Employee
                    </button>

                </div>

            </div>

        </div>
    );
}

export default EmployeeDetails;