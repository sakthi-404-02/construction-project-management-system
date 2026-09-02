import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <header className="navbar">

            <div>
                <h2>Dashboard</h2>
            </div>

            <div className="navbar-right">

                <span className="notification">
                    🔔
                </span>

                <span className="admin-name">
                    👤 Admin
                </span>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Navbar;