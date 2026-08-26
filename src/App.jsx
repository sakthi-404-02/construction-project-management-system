import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";
import EditProject from "./pages/EditProject";

import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";
import ClientDetails from "./pages/ClientDetails";
import EditClient from "./pages/EditClient";

import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee";

import Materials from "./pages/Materials";
import AddMaterial from "./pages/AddMaterial";

import Expenses from "./pages/Expenses";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

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

                <Route
                    path="/projects/:id/edit"
                    element={<EditProject />}
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
                    EMPLOYEES
                ========================= */}

                <Route
                    path="/employees"
                    element={<Employees />}
                />

                <Route
                    path="/employees/add"
                    element={<AddEmployee />}
                />

                <Route
                    path="/employees/:id"
                    element={<EmployeeDetails />}
                />

                <Route
                    path="/employees/:id/edit"
                    element={<EditEmployee />}
                />

                {/* =========================
                    MATERIALS
                ========================= */}

                <Route
                    path="/materials"
                    element={<Materials />}
                />

                <Route
                    path="/materials/add"
                    element={<AddMaterial />}
                />

                {/* =========================
                    EXPENSES
                ========================= */}

                <Route
                    path="/expenses"
                    element={<Expenses />}
                />

                {/* =========================
                    PAYMENTS
                ========================= */}

                <Route
                    path="/payments"
                    element={<Payments />}
                />

                {/* =========================
                    REPORTS
                ========================= */}

                <Route
                    path="/reports"
                    element={<Reports />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;