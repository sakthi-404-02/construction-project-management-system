import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ClientDetails.css";

const defaultClients = {
    1: {
        id: 1,
        name: "Arun Kumar",
        company: "Arun Builders",
        phone: "+91 98765 43210",
        email: "arunbuilders@gmail.com",
        location: "Chennai",
        projects: 2,
        status: "Active",
    },

    2: {
        id: 2,
        name: "Ravi Enterprises",
        company: "Ravi Enterprises",
        phone: "+91 98765 12345",
        email: "ravi@ravi-enterprises.com",
        location: "Madurai",
        projects: 3,
        status: "Active",
    },

    3: {
        id: 3,
        name: "Karthik",
        company: "Karthik Constructions",
        phone: "+91 91234 56789",
        email: "karthik@gmail.com",
        location: "Coimbatore",
        projects: 1,
        status: "Inactive",
    },
};

function ClientDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const savedClients =
        JSON.parse(localStorage.getItem("clients")) || defaultClients;

    const client = savedClients[id];

    if (!client) {
        return (
            <div className="client-details-page">
                <div className="client-details-card">
                    <h2>Client Not Found</h2>

                    <button
                        onClick={() => navigate("/clients")}
                    >
                        ← Back to Clients
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="client-details-page">

            {/* Header */}
            <div className="client-details-header">

                <button
                    className="client-back-btn"
                    onClick={() => navigate("/clients")}
                >
                    ← Back to Clients
                </button>

                <div className="client-profile">

                    <div className="large-client-avatar">
                        {client.name.charAt(0)}
                    </div>

                    <div>
                        <p>CLIENT PROFILE</p>

                        <h1>{client.name}</h1>

                        <span>{client.company}</span>
                    </div>

                </div>

            </div>

            {/* Details */}
            <div className="client-details-grid">

                <div className="client-details-card">

                    <div className="client-card-heading">
                        <h2>Contact Information</h2>
                        <span>Client contact details</span>
                    </div>

                    <div className="client-info-list">

                        <div>
                            <span>Full Name</span>
                            <strong>{client.name}</strong>
                        </div>

                        <div>
                            <span>Company</span>
                            <strong>{client.company}</strong>
                        </div>

                        <div>
                            <span>Phone</span>
                            <strong>{client.phone}</strong>
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>{client.email}</strong>
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>{client.location}</strong>
                        </div>

                    </div>

                </div>

                {/* Overview */}
                <div className="client-details-card">

                    <div className="client-card-heading">
                        <h2>Client Overview</h2>
                        <span>Current client information</span>
                    </div>

                    <div className="client-overview">

                        <div>
                            <span>Total Projects</span>
                            <strong>{client.projects}</strong>
                        </div>

                        <div>
                            <span>Status</span>

                            <strong
                                className={
                                    client.status === "Active"
                                        ? "active-text"
                                        : "inactive-text"
                                }
                            >
                                {client.status}
                            </strong>
                        </div>

                    </div>

                </div>

            </div>

            {/* Actions */}
            <div className="client-details-card client-actions">

                <h2>Actions</h2>

                <div>

                    <button
                        className="client-edit-main-btn"
                        onClick={() =>
                            navigate(`/clients/${client.id}/edit`)
                        }
                    >
                        Edit Client
                    </button>

                    <button
                        className="client-projects-btn"
                        onClick={() => navigate("/projects")}
                    >
                        View Projects
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ClientDetails;