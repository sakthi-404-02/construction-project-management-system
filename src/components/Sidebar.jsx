import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <h2>Construction MS</h2>
            </div>

            <nav className="sidebar-menu">

                <NavLink to="/dashboard">
                    🏠 Dashboard
                </NavLink>

                <NavLink to="/employees">
                    👨‍💼 Employees
                </NavLink>

                <NavLink to="/projects">
                    🏗️ Projects
                </NavLink>

                <NavLink to="/tasks">
                    📋 Tasks
                </NavLink>

                <NavLink to="/reports">
                    📊 Reports
                </NavLink>

                <NavLink to="/settings">
                    ⚙️ Settings
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;