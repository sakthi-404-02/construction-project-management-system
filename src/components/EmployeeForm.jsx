import { useState } from "react";

function EmployeeForm() {
    const [employee, setEmployee] = useState({
        name: "",
        role: "",
        phone: "",
        email: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Employee added successfully!");

        console.log(employee);

        setEmployee({
            name: "",
            role: "",
            phone: "",
            email: ""
        });
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Employee Name</label>

                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                />
            </div>

            <div className="form-group">
                <label>Role</label>

                <select
                    name="role"
                    value={employee.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Site Engineer">Site Engineer</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Construction Worker">
                        Construction Worker
                    </option>
                    <option value="Electrician">Electrician</option>
                </select>
            </div>

            <div className="form-group">
                <label>Phone Number</label>

                <input
                    type="tel"
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                />
            </div>

            <div className="form-group">
                <label>Email Address</label>

                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                />
            </div>

            <button type="submit" className="add-employee-button">
                Add Employee
            </button>
        </form>
    );
}

export default EmployeeForm;