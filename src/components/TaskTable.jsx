function TaskTable({ tasks }) {
    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Task Name</th>
                    <th>Assigned To</th>
                    <th>Deadline</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.assignedTo}</td>
                        <td>{task.deadline}</td>
                        <td>
                <span className="task-status">
                  {task.status}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;