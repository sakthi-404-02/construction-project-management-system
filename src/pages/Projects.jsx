import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

function Projects() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const projects = [
        {
            id: 1,
            name: "Green Valley Apartment",
            client: "Arun Kumar",
            location: "Chennai",
            startDate: "10-08-2026",
            endDate: "",
            status: "Ongoing",
        },
        {
            id: 2,
            name: "City Mall Construction",
            client: "Ravi Enterprises",
            location: "Madurai",
            startDate: "01-07-2026",
            endDate: "",
            status: "Ongoing",
        },
        {
            id: 3,
            name: "Sunrise Villa",
            client: "Karthik",
            location: "Coimbatore",
            startDate: "15-05-2026",
            endDate: "15-11-2026",
            status: "Completed",
        },
    ];

    const filteredProjects = projects.filter((project) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
            project.name.toLowerCase().includes(search) ||
            project.client.toLowerCase().includes(search) ||
            project.location.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            project.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="projects-page">

            {/* Header */}

            <div className="projects-header">

                <div>
                    <h1>Projects</h1>

                    <p>
                        Manage and track all construction projects
                    </p>
                </div>

                <button
                    className="add-project-btn"
                    onClick={() =>
                        navigate("/projects/add")
                    }
                >
                    + Add Project
                </button>

            </div>

            {/* Summary Cards */}

            <div className="project-summary">

                <div className="summary-card">
                    <h3>Total Projects</h3>

                    <span>
                        {projects.length}
                    </span>
                </div>

                <div className="summary-card">
                    <h3>Ongoing</h3>

                    <span>
                        {
                            projects.filter(
                                (project) =>
                                    project.status === "Ongoing"
                            ).length
                        }
                    </span>
                </div>

                <div className="summary-card">
                    <h3>Completed</h3>

                    <span>
                        {
                            projects.filter(
                                (project) =>
                                    project.status === "Completed"
                            ).length
                        }
                    </span>
                </div>

            </div>

            {/* Search and Filter */}

            <div className="project-search-filter">

                <div className="project-search-box">

                    <span className="search-icon">
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search projects, clients or locations..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                </div>

                <select
                    className="project-status-filter"
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                >
                    <option value="All">
                        All Status
                    </option>

                    <option value="Ongoing">
                        Ongoing
                    </option>

                    <option value="Completed">
                        Completed
                    </option>
                </select>

            </div>

            {/* Projects Table */}

            <div className="projects-table-container">

                <table className="projects-table">

                    <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Client</th>
                        <th>Location</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {filteredProjects.length > 0 ? (

                        filteredProjects.map((project) => (

                            <tr key={project.id}>

                                {/* Project Name */}

                                <td>
                                    <strong className="project-name">
                                        {project.name}
                                    </strong>
                                </td>

                                {/* Client */}

                                <td>
                                    {project.client}
                                </td>

                                {/* Location */}

                                <td>
                                    {project.location}
                                </td>

                                {/* Start Date */}

                                <td>
                                    {project.startDate}
                                </td>

                                {/* End Date */}

                                <td>
                                    {project.status === "Ongoing"
                                        ? "-----"
                                        : project.endDate}
                                </td>

                                {/* Status */}

                                <td>
                                    <span
                                        className={`status ${
                                            project.status.toLowerCase()
                                        }`}
                                    >
                                        {project.status}
                                    </span>
                                </td>

                                {/* Actions */}

                                <td>

                                    <button
                                        className="view-btn"
                                        onClick={() =>
                                            navigate(
                                                `/projects/${project.id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            navigate(
                                                `/projects/${project.id}/edit`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td
                                colSpan="7"
                                className="no-projects"
                            >
                                No projects found
                            </td>
                        </tr>

                    )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Projects;