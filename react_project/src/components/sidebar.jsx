import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "▦"
        },
        {
            name: "Employees",
            path: "/employees",
            icon: "👥"
        },
        {
            name: "Tasks",
            path: "/tasks",
            icon: "✓"
        },
        {
            name: "Projects",
            path: "/projects",
            icon: "🏗"
        },
        {
            name: "Materials",
            path: "/materials",
            icon: "▤"
        },
        {
            name: "Suppliers",
            path: "/suppliers",
            icon: "🚚"
        },
        {
            name: "Expenses",
            path: "/expenses",
            icon: "₹"
        },
        {
            name: "Payments",
            path: "/payments",
            icon: "💳"
        }
    ];

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="sidebar-logo">

                <div className="logo-icon">
                    🏗️
                </div>

                <div>
                    <h2>BuildTrack</h2>
                    <span>Management System</span>
                </div>

            </div>

            {/* Menu */}
            <div className="sidebar-menu">

                <p className="menu-title">
                    MAIN MENU
                </p>

                {menuItems.map((item) => (

                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >

            <span className="sidebar-icon">
              {item.icon}
            </span>

                        <span>
              {item.name}
            </span>

                    </NavLink>

                ))}

            </div>

            {/* Bottom */}
            <div className="sidebar-bottom">

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    <span>↪</span>
                    Logout
                </button>

                <div className="sidebar-version">
                    Version 1.0.0
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;