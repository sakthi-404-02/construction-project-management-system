function MaterialTable({ materials }) {
    return (
        <div className="material-table-container">
            <table className="material-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Material Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Stock Status</th>
                </tr>
                </thead>

                <tbody>
                {materials.map((material) => (
                    <tr key={material.id}>
                        <td>{material.id}</td>
                        <td>{material.name}</td>
                        <td>{material.quantity}</td>
                        <td>{material.unit}</td>
                        <td>
                <span className="material-status">
                  {material.status}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MaterialTable;