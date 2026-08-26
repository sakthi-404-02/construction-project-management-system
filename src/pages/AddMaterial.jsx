import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddMaterial.css";

function AddMaterial() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        quantity: "",
        unit: "",
        price: "",
        supplier: "",
        status: "Available",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const savedMaterials =
            JSON.parse(localStorage.getItem("materials")) || {};

        const id = Date.now();

        savedMaterials[id] = {
            id: id,
            ...formData,
        };

        localStorage.setItem(
            "materials",
            JSON.stringify(savedMaterials)
        );

        alert("Material added successfully!");

        navigate("/materials");
    };

    return (
        <div className="add-material-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="add-material-header">

                <div>

                    <p className="add-material-label">
                        MATERIAL MANAGEMENT
                    </p>

                    <h1>
                        Add Material
                    </h1>

                    <p>
                        Add a new construction material to your inventory.
                    </p>

                </div>

                <button
                    type="button"
                    className="add-material-back-btn"
                    onClick={() => navigate("/materials")}
                >
                    ← Back to Materials
                </button>

            </div>

            {/* =========================
                FORM
            ========================= */}

            <form
                className="add-material-form"
                onSubmit={handleSubmit}
            >

                <div className="add-material-section">

                    {/* Section Title */}

                    <div className="add-material-section-title">

                        <div className="add-material-number">
                            01
                        </div>

                        <div>

                            <h2>
                                Material Information
                            </h2>

                            <p>
                                Enter the basic material and stock details.
                            </p>

                        </div>

                    </div>

                    {/* Form Grid */}

                    <div className="add-material-grid">

                        {/* Material Name */}

                        <div className="add-material-group">

                            <label>
                                Material Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Example: Cement"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Category */}

                        <div className="add-material-group">

                            <label>
                                Category <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="category"
                                placeholder="Example: Construction"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Quantity */}

                        <div className="add-material-group">

                            <label>
                                Quantity <span>*</span>
                            </label>

                            <input
                                type="number"
                                name="quantity"
                                placeholder="Enter quantity"
                                min="0"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Unit */}

                        <div className="add-material-group">

                            <label>
                                Unit <span>*</span>
                            </label>

                            <select
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select unit
                                </option>

                                <option value="Bags">
                                    Bags
                                </option>

                                <option value="Pieces">
                                    Pieces
                                </option>

                                <option value="Loads">
                                    Loads
                                </option>

                                <option value="Kg">
                                    Kg
                                </option>

                                <option value="Tonnes">
                                    Tonnes
                                </option>

                                <option value="Litres">
                                    Litres
                                </option>

                            </select>

                        </div>

                        {/* Unit Price */}

                        <div className="add-material-group">

                            <label>
                                Unit Price <span>*</span>
                            </label>

                            <input
                                type="number"
                                name="price"
                                placeholder="Example: 420"
                                min="0"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Supplier */}

                        <div className="add-material-group">

                            <label>
                                Supplier <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="supplier"
                                placeholder="Enter supplier name"
                                value={formData.supplier}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Status */}

                        <div className="add-material-group">

                            <label>
                                Status <span>*</span>
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >

                                <option value="Available">
                                    Available
                                </option>

                                <option value="Low Stock">
                                    Low Stock
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* =========================
                    FOOTER
                ========================= */}

                <div className="add-material-footer">

                    <button
                        type="button"
                        className="add-material-cancel-btn"
                        onClick={() => navigate("/materials")}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="add-material-save-btn"
                    >
                        Save Material
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddMaterial;