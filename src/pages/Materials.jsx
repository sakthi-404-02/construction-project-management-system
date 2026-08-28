import MaterialTable from "../components/MaterialTable";
import "../styles/Materials.css";

function Materials() {
    const materials = [
        {
            id: 1,
            name: "Cement",
            quantity: 500,
            unit: "Bags",
            status: "Available"
        },
        {
            id: 2,
            name: "Steel",
            quantity: 1000,
            unit: "Kg",
            status: "Available"
        },
        {
            id: 3,
            name: "Bricks",
            quantity: 5000,
            unit: "Pieces",
            status: "Low Stock"
        },
        {
            id: 4,
            name: "Sand",
            quantity: 200,
            unit: "Ton",
            status: "Available"
        }
    ];

    return (
        <div className="materials-page">
            <div className="materials-header">
                <h1>Materials</h1>
                <p>Manage and track construction materials.</p>
            </div>

            <div className="materials-card">
                <MaterialTable materials={materials} />
            </div>
        </div>
    );
}

export default Materials;