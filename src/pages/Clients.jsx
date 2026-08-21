import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Clients.css";

function Clients() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const clients = [
        {
            id: 1,
            name: "Arun Kumar",
            company: "Arun Builders",
            phone: "+91 98765 43210",
            email: "arunbuilders@gmail.com",
            location: "Chennai",
            projects: 2,
            status: "Active",
        },
        {
            id: 2,
            name: "Ravi Enterprises",
            company: "Ravi Enterprises",
            phone: "+91 98765 12345",
            email: "ravi@ravi-enterprises.com",
            location: "Madurai",
            projects: 3,
            status: "Active",
        },
        {
            id: 3,
            name: "Karthik",
            company: "Karthik Constructions",
            phone: "+91 91234 56789",
            email: "karthik@gmail.com",
            location: "Coimbatore",
            projects: 1,
            status: "Inactive",
        },
    ];

    const filteredClients = clients.filter((client) => {
        const search = searchTerm.toLowerCase();

        return (
            client.name.toLowerCase().includes(search) ||
            client.company.toLowerCase().includes(search) ||
            client.email.toLowerCase().includes(search) ||
            client.location.toLowerCase().includes(search)
        );
    });

    return (
        <div className="clients-page">

            {/* Header */}
            <div className="clients-header">

                <div>
                    <p className="clients-label">CLIENT MANAGEMENT</p>

                    <h1>Clients</h1>

                    <p className="clients-description">
                        Manage your construction project clients and their information.
                    </p>
                </div>

                <button
                    className="add-client-btn"
                    onClick={() =>
                        alert("Add Client feature coming soon")
                    }
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

                    <strong>
                        {
                            clients.filter(
                                (client) => client.status === "Active"
                            ).length
                        }
                    </strong>
                </div>

                <div className="client-summary-card">
                    <span>Total Projects</span>

                    <strong>
                        {clients.reduce(
                            (total, client) =>
                                total + client.projects,
                            0
                        )}
                    </strong>
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
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
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

                                <td>

                                    <div className="client-name-cell">

                                        <div className="client-avatar">
                                            {client.name.charAt(0)}
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

                                <td>
                                    {client.company}
                                </td>

                                <td>
                                    {client.phone}
                                </td>

                                <td>
                                    {client.location}
                                </td>

                                <td>
                    <span className="project-count">
                      {client.projects}
                    </span>
                                </td>

                                <td>

                    <span
                        className={`client-status ${
                            client.status.toLowerCase()
                        }`}
                    >
                      {client.status}
                    </span>

                                </td>

                                <td>

                                    <button
                                        className="client-view-btn"
                                        onClick={() =>
                                            alert(
                                                `${client.name} details`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="client-edit-btn"
                                        onClick={() =>
                                            alert(
                                                `Edit ${client.name}`
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