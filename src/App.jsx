```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";

import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";
import ClientDetails from "./pages/ClientDetails";
import EditClient from "./pages/EditClient";

import Expenses from "./pages/Expenses";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

import DailyProgress from "./pages/DailyProgress";
import SiteReports from "./pages/SiteReports";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* =========================
                    DEFAULT PAGE
                ========================= */}

                <Route
                    path="/"
                    element={<Projects />}
                />


                {/* =========================
                    PROJECTS
                ========================= */}

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/projects/add"
                    element={<AddProject />}
                />

                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />


                {/* =========================
                    CLIENTS
                ========================= */}

                <Route
                    path="/clients"
                    element={<Clients />}
                />

                <Route
                    path="/clients/add"
                    element={<AddClient />}
                />

                <Route
                    path="/clients/:id"
                    element={<ClientDetails />}
                />

                <Route
                    path="/clients/:id/edit"
                    element={<EditClient />}
                />


                {/* =========================
                    MEMBER 4 - EXPENSES
                ========================= */}

                <Route
                    path="/expenses"
                    element={<Expenses />}
                />


                {/* =========================
                    MEMBER 4 - PAYMENTS
                ========================= */}

                <Route
                    path="/payments"
                    element={<Payments />}
                />


                {/* =========================
                    MEMBER 4 - REPORTS
                ========================= */}

                <Route
                    path="/reports"
                    element={<Reports />}
                />


                {/* =========================
                    DAILY PROGRESS
                ========================= */}

                <Route
                    path="/daily-progress"
                    element={<DailyProgress />}
                />


                {/* =========================
                    SITE REPORTS
                ========================= */}

                <Route
                    path="/site-reports"
                    element={<SiteReports />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
```
