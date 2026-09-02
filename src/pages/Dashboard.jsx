import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import "../styles/Dashboard.css";

function Dashboard() {

    return (
        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <main className="dashboard-content">

                    <div className="welcome-section">
                        <h1>Welcome back, Admin 👋</h1>
                        <p>
                            Here is what's happening in your construction projects.
                        </p>
                    </div>

                    <div className="stats-grid">

                        <StatCard
                            title="Total Employees"
                            value="25"
                            icon="👷"
                        />

                        <StatCard
                            title="Total Projects"
                            value="12"
                            icon="🏗️"
                        />

                        <StatCard
                            title="Active Tasks"
                            value="18"
                            icon="📋"
                        />

                        <StatCard
                            title="Completed Projects"
                            value="8"
                            icon="✅"
                        />

                    </div>

                    <div className="dashboard-section">

                        <h2>Recent Projects</h2>

                        <table>

                            <thead>
                            <tr>
                                <th>Project</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Progress</th>
                            </tr>
                            </thead>

                            <tbody>

                            <tr>
                                <td>Apartment Construction</td>
                                <td>Chennai</td>
                                <td>
                                        <span className="status active">
                                            Active
                                        </span>
                                </td>
                                <td>75%</td>
                            </tr>

                            <tr>
                                <td>Office Building</td>
                                <td>Bangalore</td>
                                <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                </td>
                                <td>40%</td>
                            </tr>

                            <tr>
                                <td>Shopping Mall</td>
                                <td>Coimbatore</td>
                                <td>
                                        <span className="status completed">
                                            Completed
                                        </span>
                                </td>
                                <td>100%</td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Dashboard;