import "../styles/Navbar.css";

function Navbar() {

    return (
        <header className="navbar">

            {/* Left */}
            <div className="navbar-left">

                <div>
                    <h1>Dashboard</h1>

                    <p>
                        Welcome back! Here's what's happening today.
                    </p>
                </div>

            </div>

            {/* Right */}
            <div className="navbar-right">

                {/* Search */}
                <div className="navbar-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* Notification */}
                <button className="notification-button">
                    🔔
                    <span className="notification-dot"></span>
                </button>

                {/* User */}
                <div className="navbar-user">

                    <div className="user-avatar">
                        H
                    </div>

                    <div className="user-info">
                        <strong>Hari</strong>
                        <span>Administrator</span>
                    </div>

                    <span className="user-arrow">
            ▾
          </span>

                </div>

            </div>

        </header>
    );
}

export default Navbar;