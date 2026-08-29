import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.css";

function Layout({ children }) {

    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <main>
                    {children}
                </main>

            </div>

        </div>
    );
}

export default Layout;