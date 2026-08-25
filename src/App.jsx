import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";

import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";
import ClientDetails from "./pages/ClientDetails";
import EditClient from "./pages/EditClient";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Default Page */}
                <Route
                    path="/"
                    element={<Projects />}
                />

                {/* Projects */}
                <Route
                    path="/projects"
                    element={<Projects />}
                />

                {/* Add Project */}
                <Route
                    path="/projects/add"
                    element={<AddProject />}
                />

                {/* Project Details */}
                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />

                {/* Clients */}
                <Route
                    path="/clients"
                    element={<Clients />}
                />

                {/* Add Client */}
                <Route
                    path="/clients/add"
                    element={<AddClient />}
                />

                {/* Client Details */}
                <Route
                    path="/clients/:id"
                    element={<ClientDetails />}
                />

                {/* Edit Client */}
                <Route
                    path="/clients/:id/edit"
                    element={<EditClient />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;