import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddProject.css";

function AddProject() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        projectName: "",
        clientName: "",
        location: "",
        startDate: "",
        endDate: "",
        budget: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Project Details:", formData);

        alert("Project added successfully!");

        navigate("/projects");
    };

    return (
        <div className="add-project-page">

            {/* Page Header */}
            <div className="add-project-top">
                <div>
                    <p className="page-label">PROJECT MANAGEMENT</p>
                    <h1>Add New Project</h1>
                    <p className="page-description">
                        Create a new construction project and add its basic information.
                    </p>
                </div>

                <button
                    className="back-project-btn"
                    onClick={() => navigate("/projects")}
                >
                    ← Back to Projects
                </button>
            </div>

            {/* Form */}
            <form
                className="project-form"
                onSubmit={handleSubmit}
            >

                {/* Basic Information */}
                <div className="form-section">

                    <div className="section-heading">
                        <div className="section-icon">01</div>

                        <div>
                            <h2>Basic Information</h2>
                            <p>Enter the basic details of your project.</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-group full-width">
                            <label>
                                Project Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="projectName"
                                placeholder="e.g. Green Valley Apartment"
                                value={formData.projectName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Client Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="clientName"
                                placeholder="Enter client name"
                                value={formData.clientName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Project Location <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                placeholder="e.g. Chennai"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>
                </div>

                {/* Schedule */}
                <div className="form-section">

                    <div className="section-heading">
                        <div className="section-icon">02</div>

                        <div>
                            <h2>Project Schedule</h2>
                            <p>Set the expected start and completion dates.</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>
                                Start Date <span>*</span>
                            </label>

                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Expected End Date <span>*</span>
                            </label>

                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>
                </div>

                {/* Budget */}
                <div className="form-section">

                    <div className="section-heading">
                        <div className="section-icon">03</div>

                        <div>
                            <h2>Budget & Description</h2>
                            <p>Add financial information and project notes.</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>
                                Estimated Budget <span>*</span>
                            </label>

                            <div className="budget-input">
                                <span>₹</span>

                                <input
                                    type="number"
                                    name="budget"
                                    placeholder="Enter estimated budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    min="0"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Project Description</label>

                            <textarea
                                name="description"
                                placeholder="Write a short description about this project..."
                                value={formData.description}
                                onChange={handleChange}
                                rows="5"
                            />
                        </div>

                    </div>
                </div>

                {/* Buttons */}
                <div className="form-footer">

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate("/projects")}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="save-project-btn"
                    >
                        Create Project
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddProject;