import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditEmployee.css";

function EditEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();

    const employees = {
        1: {
            name: "Arun Kumar",
            role: "Site Engineer",
            phone: "+91 9876543210",
            email: "arun@example.com",
            location: "Chennai",
            joiningDate: "2025-08-10",
            status: "Active",
        },
        2: {
            name: "Ravi Kumar",
            role: "Project Manager",
            phone: "+91 9876543211",
            email: "ravi@example.com",
            location: "Madurai",
            joiningDate: "2025-06-15",
            status: "Active",
        },
        3: {
            name: "Karthik",
            role: "Supervisor",
            phone: "+91 9876543212",
            email: "karthik@example.com",
            location: "Coimbatore",
            joiningDate: "2025-03-20",
            status: "Inactive",
        },
    };

    const existingEmployee = employees[id];

    const [formData, setFormData] = useState(
        existingEmployee || {
            name: "",
            role: "",
            phone: "",
            email: "",
            location: "",
            joiningDate: "",
            status: "Active",
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Employee updated successfully!");

        navigate(`/employees/${id}`);
    };

    if (!existingEmployee) {
        return (
            <div className="edit-employee-page">
                <div className="edit-employee-card not-found-card">

                    <h2>Employee Not Found</h2>

                    <p>
                        The employee you are looking for does not exist.
                    </p>

                    <button
                        type="button"
                        className="edit-employee-primary-btn"
                        onClick={() => navigate("/employees")}
                    >
                        ← Back to Employees
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="edit-employee-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="edit-employee-header">

                <div>
                    <p className="edit-employee-label">
                        EMPLOYEE MANAGEMENT
                    </p>

                    <h1>Edit Employee</h1>

                    <p className="edit-employee-description">
                        Update the employee information below.
                    </p>
                </div>

                <button
                    type="button"
                    className="edit-employee-back-btn"
                    onClick={() =>
                        navigate(`/employees/${id}`)
                    }
                >
                    ← Back to Employee
                </button>

            </div>

            {/* =========================
                FORM
            ========================= */}

            <form
                className="edit-employee-form"
                onSubmit={handleSubmit}
            >

                <div className="edit-employee-card">

                    <div className="edit-employee-card-title">

                        <h2>Employee Information</h2>

                        <span>
                            Update basic employee details
                        </span>

                    </div>

                    <div className="edit-employee-grid">

                        {/* NAME */}

                        <div className="edit-employee-group">

                            <label>
                                Full Name
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* ROLE */}

                        <div className="edit-employee-group">

                            <label>
                                Role
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* PHONE */}

                        <div className="edit-employee-group">

                            <label>
                                Phone Number
                                <span>*</span>
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* EMAIL */}

                        <div className="edit-employee-group">

                            <label>
                                Email Address
                                <span>*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* LOCATION */}

                        <div className="edit-employee-group">

                            <label>
                                Location
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            JOINING DATE
                        ========================= */}

                        <div className="edit-employee-group">

                            <label>
                                Joining Date
                                <span>*</span>
                            </label>

                            <div className="custom-date-box">

                                <input
                                    type="date"
                                    name="joiningDate"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                    required
                                />

                                <span className="custom-calendar-icon">
                                    📅
                                </span>

                            </div>

                        </div>

                        {/* STATUS */}

                        <div className="edit-employee-group">

                            <label>
                                Status
                                <span>*</span>
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* =========================
                    FOOTER
                ========================= */}

                <div className="edit-employee-footer">

                    <button
                        type="button"
                        className="edit-employee-cancel-btn"
                        onClick={() =>
                            navigate(`/employees/${id}`)
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="edit-employee-save-btn"
                    >
                        Save Changes
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditEmployee;