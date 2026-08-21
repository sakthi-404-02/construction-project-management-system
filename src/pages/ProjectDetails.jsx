import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const projects = [
        {
            id: "1",
            name: "Green Valley Apartment",
            client: "Arun Kumar",
            location: "Chennai",
            startDate: "10 Aug 2026",
            endDate: "10 Feb 2027",
            budget: "₹25,00,000",
            status: "Ongoing",
            progress: 65,
            description:
                "Residential apartment construction project with multiple floors and modern facilities.",
        },
        {
            id: "2",
            name: "City Mall Construction",
            client: "Ravi Enterprises",
            location: "Madurai",
            startDate: "01 Jul 2026",
            endDate: "01 Jan 2027",
            budget: "₹45,00,000",
            status: "Ongoing",
            progress: 40,
            description:
                "Commercial shopping mall construction project with retail spaces, parking and modern infrastructure.",
        },
        {
            id: "3",
            name: "Sunrise Villa",
            client: "Karthik",
            location: "Coimbatore",
            startDate: "15 May 2026",
            endDate: "15 Nov 2026",
            budget: "₹18,00,000",
            status: "Completed",
            progress: 100,
            description:
                "Modern residential villa construction project completed with interior and exterior finishing.",
        },
    ];

    const project = projects.find(
        (item) => item.id === id
    );

    if (!project) {
        return (
            <div className="project-details-page">

                <div className="details-card">
                    <h2>Project Not Found</h2>

                    <p>
                        The project you are looking for does not exist.
                    </p>

                    <button
                        className="action-primary"
                        onClick={() => navigate("/projects")}
                    >
                        ← Back to Projects
                    </button>
                </div>

            </div>
        );
    }

    return (
        <div className="project-details-page">

            {/* Header */}
            <div className="details-top">

                <button
                    className="back-btn"
                    onClick={() => navigate("/projects")}
                >
                    ← Back to Projects
                </button>

                <div className="project-title">

                    <div>

                        <p className="details-label">
                            PROJECT #{project.id}
                        </p>

                        <h1>{project.name}</h1>

                        <p className="details-location">
                            📍 {project.location}
                        </p>

                    </div>

                    <span
                        className={`details-status ${
                            project.status.toLowerCase()
                        }`}
                    >
            {project.status}
          </span>

                </div>

            </div>

            {/* Main Grid */}
            <div className="details-main-grid">

                {/* Overview */}
                <div className="details-card overview-card">

                    <div className="card-title">
                        <h2>Project Overview</h2>
                        <span>Basic project information</span>
                    </div>

                    <div className="info-grid">

                        <div className="info-item">
                            <span>Client</span>
                            <strong>{project.client}</strong>
                        </div>

                        <div className="info-item">
                            <span>Location</span>
                            <strong>{project.location}</strong>
                        </div>

                        <div className="info-item">
                            <span>Start Date</span>
                            <strong>{project.startDate}</strong>
                        </div>

                        <div className="info-item">
                            <span>End Date</span>
                            <strong>{project.endDate}</strong>
                        </div>

                        <div className="info-item">
                            <span>Estimated Budget</span>
                            <strong>{project.budget}</strong>
                        </div>

                        <div className="info-item">
                            <span>Current Status</span>
                            <strong
                                className={
                                    project.status === "Completed"
                                        ? "completed-text"
                                        : "status-text"
                                }
                            >
                                {project.status}
                            </strong>
                        </div>

                    </div>

                </div>

                {/* Progress */}
                <div className="details-card progress-card">

                    <div className="card-title">
                        <h2>Project Progress</h2>
                        <span>Overall completion</span>
                    </div>

                    <div className="progress-content">

                        <div className="progress-circle">
                            <span>{project.progress}%</span>
                        </div>

                        <div className="progress-info">

                            <h3>
                                {project.progress}% Completed
                            </h3>

                            <p>
                                Current project completion status.
                            </p>

                            <div className="progress-bar">

                                <div
                                    className="progress-fill"
                                    style={{
                                        width: `${project.progress}%`,
                                    }}
                                ></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Description */}
            <div className="details-card description-card">

                <div className="card-title">
                    <h2>Project Description</h2>
                    <span>Project overview and notes</span>
                </div>

                <p className="description-text">
                    {project.description}
                </p>

            </div>

            {/* Quick Actions */}
            <div className="details-card actions-card">

                <div className="card-title">
                    <h2>Quick Actions</h2>
                    <span>Manage this project</span>
                </div>

                <div className="action-buttons">

                    <button
                        className="action-primary"
                        onClick={() => navigate("/projects")}
                    >
                        ← Projects
                    </button>

                    <button
                        className="action-secondary"
                        onClick={() =>
                            alert(
                                `Edit ${project.name} feature coming soon`
                            )
                        }
                    >
                        Edit Project
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProjectDetails;