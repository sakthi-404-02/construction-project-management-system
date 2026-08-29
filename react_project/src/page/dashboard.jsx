import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import "../styles/Dashboard.css";

function Dashboard() {

    return (
        <Layout>

            <div className="dashboard">

                {/* Header */}

                <div className="dashboard-heading">

                    <div>
                        <h2>Overview</h2>

                        <p>
                            Monitor your construction business at a glance.
                        </p>
                    </div>

                    <button className="add-project-button">
                        + New Project
                    </button>

                </div>


                {/* Statistics */}

                <div className="stats-grid">

                    <StatCard
                        title="Total Projects"
                        value="24"
                        icon="🏗️"
                        description="Projects in system"
                        trend="+12%"
                    />

                    <StatCard
                        title="Active Projects"
                        value="12"
                        icon="📋"
                        description="Currently in progress"
                        trend="+8%"
                    />

                    <StatCard
                        title="Employees"
                        value="86"
                        icon="👥"
                        description="Active employees"
                        trend="+5%"
                    />

                    <StatCard
                        title="Total Expenses"
                        value="₹24.8L"
                        icon="₹"
                        description="This financial year"
                        trend="+14%"
                    />

                </div>


                {/* Main Content */}

                <div className="dashboard-grid">

                    {/* Project Progress */}

                    <div className="dashboard-panel">

                        <div className="panel-header">

                            <div>
                                <h3>Project Progress</h3>

                                <p>
                                    Current project status
                                </p>
                            </div>

                            <button>
                                View All
                            </button>

                        </div>

                        <div className="project-list">

                            <div className="project-item">

                                <div className="project-info">
                                    <strong>Green Villa</strong>
                                    <span>Chennai</span>
                                </div>

                                <div className="progress-section">

                                    <div className="progress-bar">
                                        <div
                                            className="progress-value"
                                            style={{ width: "78%" }}
                                        ></div>
                                    </div>

                                    <span>78%</span>

                                </div>

                            </div>


                            <div className="project-item">

                                <div className="project-info">
                                    <strong>Modern Office</strong>
                                    <span>Coimbatore</span>
                                </div>

                                <div className="progress-section">

                                    <div className="progress-bar">
                                        <div
                                            className="progress-value"
                                            style={{ width: "56%" }}
                                        ></div>
                                    </div>

                                    <span>56%</span>

                                </div>

                            </div>


                            <div className="project-item">

                                <div className="project-info">
                                    <strong>Apartment Complex</strong>
                                    <span>Madurai</span>
                                </div>

                                <div className="progress-section">

                                    <div className="progress-bar">
                                        <div
                                            className="progress-value"
                                            style={{ width: "42%" }}
                                        ></div>
                                    </div>

                                    <span>42%</span>

                                </div>

                            </div>


                            <div className="project-item">

                                <div className="project-info">
                                    <strong>Shopping Center</strong>
                                    <span>Salem</span>
                                </div>

                                <div className="progress-section">

                                    <div className="progress-bar">
                                        <div
                                            className="progress-value"
                                            style={{ width: "91%" }}
                                        ></div>
                                    </div>

                                    <span>91%</span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Recent Tasks */}

                    <div className="dashboard-panel">

                        <div className="panel-header">

                            <div>
                                <h3>Recent Tasks</h3>

                                <p>
                                    Latest assigned tasks
                                </p>
                            </div>

                            <button>
                                View All
                            </button>

                        </div>

                        <div className="task-list">

                            <div className="task-item">

                                <div className="task-icon">
                                    ✓
                                </div>

                                <div className="task-details">
                                    <strong>Foundation Work</strong>
                                    <span>Green Villa</span>
                                </div>

                                <span className="task-status completed">
                  Completed
                </span>

                            </div>


                            <div className="task-item">

                                <div className="task-icon">
                                    ⚡
                                </div>

                                <div className="task-details">
                                    <strong>Electrical Wiring</strong>
                                    <span>Modern Office</span>
                                </div>

                                <span className="task-status progress">
                  In Progress
                </span>

                            </div>


                            <div className="task-item">

                                <div className="task-icon">
                                    🎨
                                </div>

                                <div className="task-details">
                                    <strong>Interior Painting</strong>
                                    <span>Apartment Complex</span>
                                </div>

                                <span className="task-status pending">
                  Pending
                </span>

                            </div>


                            <div className="task-item">

                                <div className="task-icon">
                                    🧱
                                </div>

                                <div className="task-details">
                                    <strong>Wall Construction</strong>
                                    <span>Shopping Center</span>
                                </div>

                                <span className="task-status progress">
                  In Progress
                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Dashboard;