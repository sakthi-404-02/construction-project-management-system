import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditClient.css";

function EditClient() {
    const navigate = useNavigate();
    const { id } = useParams();

    const clients = {
        1: {
            name: "Arun Kumar",
            company: "Arun Builders",
            phone: "+91 98765 43210",
            email: "arunbuilders@gmail.com",
            location: "Chennai",
        },

        2: {
            name: "Ravi Enterprises",
            company: "Ravi Enterprises",
            phone: "+91 98765 12345",
            email: "ravi@ravi-enterprises.com",
            location: "Madurai",
        },

        3: {
            name: "Karthik",
            company: "Karthik Constructions",
            phone: "+91 91234 56789",
            email: "karthik@gmail.com",
            location: "Coimbatore",
        },
    };

    const existingClient = clients[id];

    const [formData, setFormData] = useState(
        existingClient || {
            name: "",
            company: "",
            phone: "",
            email: "",
            location: "",
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Client updated successfully!");

        navigate(`/clients/${id}`);
    };

    return (
        <div className="edit-client-page">

            {/* Header */}
            <div className="edit-client-header">

                <div>
                    <p className="edit-label">
                        CLIENT MANAGEMENT
                    </p>

                    <h1>Edit Client</h1>

                    <p>
                        Update the client's information below.
                    </p>
                </div>

                <button
                    className="edit-back-btn"
                    onClick={() => navigate(`/clients/${id}`)}
                >
                    ← Back to Client
                </button>

            </div>

            {/* Form */}
            <form
                className="edit-client-form"
                onSubmit={handleSubmit}
            >

                <div className="edit-form-section">

                    <div className="edit-section-title">

                        <div className="edit-number">
                            01
                        </div>

                        <div>
                            <h2>Client Information</h2>

                            <p>
                                Update basic client and contact details.
                            </p>
                        </div>

                    </div>

                    <div className="edit-form-grid">

                        <div className="edit-form-group">

                            <label>
                                Full Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="edit-form-group">

                            <label>
                                Company Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="edit-form-group">

                            <label>
                                Phone Number <span>*</span>
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="edit-form-group">

                            <label>
                                Email Address <span>*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="edit-form-group full-width">

                            <label>
                                Location <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="edit-form-footer">

                    <button
                        type="button"
                        className="edit-cancel-btn"
                        onClick={() =>
                            navigate(`/clients/${id}`)
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="edit-save-btn"
                    >
                        Save Changes
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditClient;