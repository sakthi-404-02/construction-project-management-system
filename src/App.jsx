import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";
import Clients from "./pages/Clients";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          {/* Default page */}
          <Route path="/" element={<Projects />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* Add Project */}
          <Route path="/projects/add" element={<AddProject />} />

          {/* Project Details */}
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* Clients */}
          <Route path="/clients" element={<Clients />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;