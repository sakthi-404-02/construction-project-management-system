import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditProject.css";

function EditProject() {
    const navigate = useNavigate();
    const { id } = useParams();

    const projects = {
        1: {
            name: "Green Valley Apartment",
            client: "Arun Kumar",
            location: "Chennai",
            startDate: "2026-08-10",
            endDate: "",
            status: "Ongoing",
        },

        2: {
            name: "City Mall Construction",
            client: "Ravi Enterprises",
            location: "Madurai",
            startDate: "2026-07-01",
            endDate: "",
            status: "Ongoing",
        },

        3: {
            name: "Sunrise Villa",
            client: "Karthik",
            location: "Coimbatore",
            startDate: "2026-05-15",
            endDate: "2026-11-15",
            status: "Completed",
        },
    };

    const existingProject = projects[id];

    const [formData, setFormData] = useState(
        existingProject || {
            name: "",
            client: "",
            location: "",
            startDate: "",
            endDate: "",
            status: "Ongoing",
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleStatusChange = (event) => {
        const status = event.target.value;

        setFormData((previousData) => ({
            ...previousData,
            status: status,
            endDate:
                status === "Ongoing"
                    ? ""
                    : previousData.endDate,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            formData.status === "Completed" &&
            !formData.endDate
        ) {
            alert("Please select the end date.");
            return;
        }

        alert("Project updated successfully!");

        navigate(`/projects/${id}`);
    };

    if (!existingProject) {
        return (
            <div className="edit-project-page">

                <div className="edit-project-header">

                    <div>
                        <p className="edit-project-label">
                            PROJECT MANAGEMENT
                        </p>

                        <h1>
                            Project Not Found
                        </h1>

                        <p>
                            The selected project does not exist.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="edit-project-back-btn"
                        onClick={() =>
                            navigate("/projects")
                        }
                    >
                        ← Back to Projects
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="edit-project-page">

            {/* Header */}

            <div className="edit-project-header">

                <div>

                    <p className="edit-project-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Edit Project
                    </h1>

                    <p>
                        Update the project information below.
                    </p>

                </div>

                <button
                    type="button"
                    className="edit-project-back-btn"
                    onClick={() =>
                        navigate(`/projects/${id}`)
                    }
                >
                    ← Back to Project
                </button>

            </div>

            {/* Form */}

            <form
                className="edit-project-form"
                onSubmit={handleSubmit}
            >

                <div className="edit-project-section">

                    {/* Section Header */}

                    <div className="edit-project-section-title">

                        <div className="edit-project-number">
                            01
                        </div>

                        <div>
                            <h2>
                                Project Information
                            </h2>

                            <p>
                                Update basic project details.
                            </p>
                        </div>

                    </div>

                    {/* Form Grid */}

                    <div className="edit-project-grid">

                        {/* Project Name */}

                        <div className="edit-project-group">

                            <label>
                                Project Name
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Client */}

                        <div className="edit-project-group">

                            <label>
                                Client Name
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="client"
                                value={formData.client}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Location */}

                        <div className="edit-project-group">

                            <label>
                                Location
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Start Date */}

                        <div className="edit-project-group">

                            <label>
                                Start Date
                                <span>*</span>
                            </label>

                            <div className="date-input-wrapper">

                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                />

                                <span className="calendar-icon">
                                    📅
                                </span>

                            </div>

                            <small>
                                Select the project start date.
                            </small>

                        </div>

                        {/* Status */}

                        <div className="edit-project-group">

                            <label>
                                Status
                                <span>*</span>
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleStatusChange}
                                required
                            >

                                <option value="Ongoing">
                                    Ongoing
                                </option>

                                <option value="Completed">
                                    Completed
                                </option>

                            </select>

                        </div>

                        {/* End Date */}

                        <div className="edit-project-group">

                            <label>
                                End Date

                                {formData.status === "Completed" && (
                                    <span>*</span>
                                )}
                            </label>

                            {formData.status === "Ongoing" ? (

                                <input
                                    type="text"
                                    value="-----"
                                    disabled
                                    className="disabled-date"
                                />

                            ) : (

                                <div className="date-input-wrapper">

                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        min={formData.startDate}
                                        required
                                    />

                                    <span className="calendar-icon">
                                        📅
                                    </span>

                                </div>

                            )}

                            <small>
                                {formData.status === "Ongoing"
                                    ? "End date will be added when the project is completed."
                                    : "Select the actual project completion date."}
                            </small>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="edit-project-footer">

                    <button
                        type="button"
                        className="edit-project-cancel-btn"
                        onClick={() =>
                            navigate(`/projects/${id}`)
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="edit-project-save-btn"
                    >
                        Save Changes
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditProject;