import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

    return (
        <div>

            <Sidebar />

            <div className="main-content">

                <Navbar />

                {children}

            </div>

        </div>
    );
}

export default Layout;