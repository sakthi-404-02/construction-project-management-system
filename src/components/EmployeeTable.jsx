function EmployeeTable({ employees }) {
    return (
        <div className="employee-table-container">
            <table className="employee-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.role}</td>
                        <td>{employee.phone}</td>
                        <td>
                <span className="employee-status">
                  {employee.status}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;