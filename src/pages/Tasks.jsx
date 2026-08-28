import TaskTable from "../components/TaskTable";
import "../styles/Tasks.css";

function Tasks() {
    const tasks = [
        {
            id: 1,
            name: "Foundation Work",
            assignedTo: "Arun Kumar",
            deadline: "30 Aug 2026",
            status: "In Progress"
        },
        {
            id: 2,
            name: "Electrical Installation",
            assignedTo: "Rahul",
            deadline: "05 Sep 2026",
            status: "Pending"
        },
        {
            id: 3,
            name: "Wall Construction",
            assignedTo: "Vijay",
            deadline: "10 Sep 2026",
            status: "In Progress"
        },
        {
            id: 4,
            name: "Painting Work",
            assignedTo: "Karthik",
            deadline: "15 Sep 2026",
            status: "Not Started"
        }
    ];

    return (
        <div className="tasks-page">
            <div className="tasks-header">
                <h1>Tasks</h1>
                <p>Track and manage construction project tasks.</p>
            </div>

            <div className="tasks-card">
                <TaskTable tasks={tasks} />
            </div>
        </div>
    );
}

export default Tasks;