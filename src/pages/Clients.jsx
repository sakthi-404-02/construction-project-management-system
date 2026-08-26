import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clients.css";
import clientsData from "../data/clients.js";

function Clients() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const clients = clientsData;

    const filteredClients = clients.filter((client) => {
        const search = searchTerm.toLowerCase();

        return (
            client.name?.toLowerCase().includes(search) ||
            client.company?.toLowerCase().includes(search) ||
            client.email?.toLowerCase().includes(search) ||
            client.location?.toLowerCase().includes(search)
        );
    });

    const activeClients = clients.filter(
        (client) => client.status === "Active"
    ).length;

    const totalProjects = clients.reduce(
        (total, client) => total + Number(client.projects || 0),
        0
    );

    return (
        <div className="clients-page">

            {/* Header */}

            <div className="clients-header">

                <div>
                    <p className="clients-label">
                        CLIENT MANAGEMENT
                    </p>

                    <h1>Clients</h1>

                    <p className="clients-description">
                        Manage your construction project clients and their information.
                    </p>
                </div>

                <button
                    className="add-client-btn"
                    onClick={() => navigate("/clients/add")}
                >
                    + Add Client
                </button>

            </div>

            {/* Summary Cards */}

            <div className="clients-summary">

                <div className="client-summary-card">
                    <span>Total Clients</span>
                    <strong>{clients.length}</strong>
                </div>

                <div className="client-summary-card">
                    <span>Active Clients</span>
                    <strong>{activeClients}</strong>
                </div>

                <div className="client-summary-card">
                    <span>Total Projects</span>
                    <strong>{totalProjects}</strong>
                </div>

            </div>

            {/* Search */}

            <div className="clients-search-section">

                <div className="clients-search-box">

                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search clients, company or location..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />

                </div>

            </div>

            {/* Client Table */}

            <div className="clients-table-container">

                <table className="clients-table">

                    <thead>
                    <tr>
                        <th>Client</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Projects</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {filteredClients.length > 0 ? (

                        filteredClients.map((client) => (

                            <tr key={client.id}>

                                {/* Client */}

                                <td>
                                    <div className="client-name-cell">

                                        <div className="client-avatar">
                                            {client.name
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>
                                                {client.name}
                                            </strong>

                                            <small>
                                                {client.email}
                                            </small>
                                        </div>

                                    </div>
                                </td>

                                {/* Company */}

                                <td>
                                    {client.company}
                                </td>

                                {/* Contact */}

                                <td>
                                    {client.phone}
                                </td>

                                {/* Location */}

                                <td>
                                    {client.location}
                                </td>

                                {/* Projects */}

                                <td>
                                    <span className="project-count">
                                        {client.projects || 0}
                                    </span>
                                </td>

                                {/* Status */}

                                <td>
                                    <span
                                        className={`client-status ${
                                            client.status?.toLowerCase() || "active"
                                        }`}
                                    >
                                        {client.status || "Active"}
                                    </span>
                                </td>

                                {/* Actions */}

                                <td>

                                    <button
                                        className="client-view-btn"
                                        onClick={() =>
                                            navigate(
                                                `/clients/${client.id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="client-edit-btn"
                                        onClick={() =>
                                            navigate(
                                                `/clients/${client.id}/edit`
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
                                className="no-clients"
                            >
                                No clients found
                            </td>
                        </tr>

                    )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Clients;