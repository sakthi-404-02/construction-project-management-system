function SupplierTable({ suppliers }) {
    return (
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
    );
}

export default SupplierTable;