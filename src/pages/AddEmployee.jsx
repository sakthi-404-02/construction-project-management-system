import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddEmployee.css";

function AddEmployee() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        phone: "",
        email: "",
        location: "",
        joiningDate: "",
        status: "Active",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const savedEmployees =
            JSON.parse(localStorage.getItem("employees")) || {};

        const id = Date.now();

        savedEmployees[id] = {
            id: id,
            ...formData,
        };

        localStorage.setItem(
            "employees",
            JSON.stringify(savedEmployees)
        );

        alert("Employee added successfully!");

        navigate("/employees");
    };

    return (
        <div className="add-employee-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="add-employee-header">

                <div>

                    <p className="add-employee-label">
                        EMPLOYEE MANAGEMENT
                    </p>

                    <h1>
                        Add Employee
                    </h1>

                    <p>
                        Add a new employee to your construction team.
                    </p>

                </div>

                <button
                    type="button"
                    className="add-employee-back-btn"
                    onClick={() => navigate("/employees")}
                >
                    ← Back to Employees
                </button>

            </div>

            {/* =========================
                FORM
            ========================= */}

            <form
                className="add-employee-form"
                onSubmit={handleSubmit}
            >

                <div className="add-employee-section">

                    {/* Section Title */}

                    <div className="add-employee-section-title">

                        <div className="add-employee-number">
                            01
                        </div>

                        <div>

                            <h2>
                                Employee Information
                            </h2>

                            <p>
                                Enter the employee's basic information.
                            </p>

                        </div>

                    </div>

                    {/* Form Grid */}

                    <div className="add-employee-grid">

                        {/* =========================
                            NAME
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Full Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter employee name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            ROLE
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Role <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="role"
                                placeholder="Example: Site Engineer"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            PHONE
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Phone Number <span>*</span>
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            EMAIL
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Email Address <span>*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            LOCATION
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Location <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* =========================
                            JOINING DATE
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Joining Date <span>*</span>
                            </label>

                            <div className="add-employee-date-box">

                                <input
                                    type="date"
                                    name="joiningDate"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                    required
                                />

                                <span className="add-employee-calendar-icon">
                                    📅
                                </span>

                            </div>

                        </div>

                        {/* =========================
                            STATUS
                        ========================= */}

                        <div className="add-employee-group">

                            <label>
                                Status <span>*</span>
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

                <div className="add-employee-footer">

                    <button
                        type="button"
                        className="add-employee-cancel-btn"
                        onClick={() => navigate("/employees")}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="add-employee-save-btn"
                    >
                        Save Employee
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddEmployee;