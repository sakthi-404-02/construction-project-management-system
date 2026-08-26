import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Materials.css";

function Materials() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const materials = [
        {
            id: 1,
            name: "Cement",
            category: "Construction",
            quantity: 250,
            unit: "Bags",
            price: "₹420",
            supplier: "Sri Lakshmi Traders",
            status: "Available",
        },
        {
            id: 2,
            name: "Steel Rods",
            category: "Steel",
            quantity: 120,
            unit: "Pieces",
            price: "₹680",
            supplier: "Chennai Steel Works",
            status: "Available",
        },
        {
            id: 3,
            name: "River Sand",
            category: "Sand",
            quantity: 80,
            unit: "Loads",
            price: "₹5,500",
            supplier: "Green Sand Suppliers",
            status: "Low Stock",
        },
        {
            id: 4,
            name: "Bricks",
            category: "Construction",
            quantity: 5000,
            unit: "Pieces",
            price: "₹8",
            supplier: "Murugan Bricks",
            status: "Available",
        },
    ];

    const filteredMaterials = materials.filter((material) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
            material.name.toLowerCase().includes(search) ||
            material.category.toLowerCase().includes(search) ||
            material.supplier.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            material.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="materials-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="materials-header">

                <div>

                    <p className="materials-label">
                        MATERIAL MANAGEMENT
                    </p>

                    <h1>
                        Materials
                    </h1>

                    <p className="materials-description">
                        Manage construction materials and stock details.
                    </p>

                </div>

                <button
                    className="add-material-btn"
                    onClick={() => navigate("/materials/add")}
                >
                    + Add Material
                </button>

            </div>

            {/* =========================
                SUMMARY
            ========================= */}

            <div className="materials-summary">

                <div className="material-summary-card">

                    <span>
                        Total Materials
                    </span>

                    <strong>
                        {materials.length}
                    </strong>

                </div>

                <div className="material-summary-card">

                    <span>
                        Available
                    </span>

                    <strong>
                        {
                            materials.filter(
                                (material) =>
                                    material.status === "Available"
                            ).length
                        }
                    </strong>

                </div>

                <div className="material-summary-card">

                    <span>
                        Low Stock
                    </span>

                    <strong>
                        {
                            materials.filter(
                                (material) =>
                                    material.status === "Low Stock"
                            ).length
                        }
                    </strong>

                </div>

            </div>

            {/* =========================
                SEARCH & FILTER
            ========================= */}

            <div className="materials-search-section">

                <div className="materials-search-box">

                    <span>
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search materials, categories or suppliers..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />

                </div>

                <select
                    className="materials-status-filter"
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(event.target.value)
                    }
                >

                    <option value="All">
                        All Status
                    </option>

                    <option value="Available">
                        Available
                    </option>

                    <option value="Low Stock">
                        Low Stock
                    </option>

                </select>

            </div>

            {/* =========================
                TABLE
            ========================= */}

            <div className="materials-table-container">

                <table className="materials-table">

                    <thead>

                    <tr>

                        <th>
                            Material
                        </th>

                        <th>
                            Category
                        </th>

                        <th>
                            Quantity
                        </th>

                        <th>
                            Unit
                        </th>

                        <th>
                            Unit Price
                        </th>

                        <th>
                            Supplier
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>

                    </tr>

                    </thead>

                    <tbody>

                    {filteredMaterials.length > 0 ? (

                        filteredMaterials.map((material) => (

                            <tr key={material.id}>

                                {/* Material */}

                                <td>

                                    <div className="material-name-cell">

                                        <div className="material-icon">
                                            M
                                        </div>

                                        <div>

                                            <strong>
                                                {material.name}
                                            </strong>

                                            <small>
                                                Material #{material.id}
                                            </small>

                                        </div>

                                    </div>

                                </td>

                                {/* Category */}

                                <td>
                                    {material.category}
                                </td>

                                {/* Quantity */}

                                <td>
                                    {material.quantity}
                                </td>

                                {/* Unit */}

                                <td>
                                    {material.unit}
                                </td>

                                {/* Price */}

                                <td>
                                    {material.price}
                                </td>

                                {/* Supplier */}

                                <td>
                                    {material.supplier}
                                </td>

                                {/* Status */}

                                <td>

                                    <span
                                        className={`material-status ${
                                            material.status
                                                .toLowerCase()
                                                .replace(" ", "-")
                                        }`}
                                    >
                                        {material.status}
                                    </span>

                                </td>

                                {/* Actions */}

                                <td>

                                    <button
                                        className="material-view-btn"
                                        onClick={() =>
                                            navigate(
                                                `/materials/${material.id}`
                                            )
                                        }
                                    >
                                        View
                                    </button>

                                    <button
                                        className="material-edit-btn"
                                        onClick={() =>
                                            navigate(
                                                `/materials/${material.id}/edit`
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
                                colSpan="8"
                                className="no-materials"
                            >
                                No materials found
                            </td>

                        </tr>

                    )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Materials;