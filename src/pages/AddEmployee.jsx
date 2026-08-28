import EmployeeForm from "../components/EmployeeForm";
import "../styles/AddEmployee.css";

function AddEmployee() {
    return (
        <div className="add-employee-page">
            <h1>Add Employee</h1>

            <p className="page-description">
                Enter the employee details below.
            </p>

            <div className="add-employee-card">
                <EmployeeForm />
            </div>
        </div>
    );
}

export default AddEmployee;