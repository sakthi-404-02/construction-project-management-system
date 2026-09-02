
import React from "react";
import "../styles/Suppliers.css";

function Suppliers() {
    const suppliers = [
        {
            id: 1,
            name: "ABC Suppliers",
            material: "Cement",
            phone: "9876543210",
            location: "Chennai",
        },
        {
            id: 2,
            name: "BuildMart",
            material: "Steel",
            phone: "9876501234",
            location: "Coimbatore",
        },
        {
            id: 3,
            name: "Prime Materials",
            material: "Sand",
            phone: "9876512345",
            location: "Madurai",
        },
    ];

    return (
        <div className="suppliers-page">

            <div className="suppliers-header">
                <h1>Suppliers</h1>
                <p>Manage and view your construction material suppliers.</p>
            </div>

            <div className="suppliers-card">

                <div className="supplier-table-container">
                    <table className="supplier-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Supplier Name</th>
                                <th>Material</th>
                                <th>Phone</th>
                                <th>Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            {suppliers.map((supplier) => (
                                <tr key={supplier.id}>
                                    <td>{supplier.id}</td>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.material}</td>
                                    <td>{supplier.phone}</td>
                                    <td>{supplier.location}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}

export default Suppliers;

