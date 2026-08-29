```jsx
import { useEffect, useState } from "react";
import "../styles/SiteReports.css";

function SiteReports() {
    const emptyForm = {
        project: "",
        date: "",
        reportTitle: "",
        siteCondition: "",
        workStatus: "",
        issues: "",
        description: "",
    };

    const [formData, setFormData] = useState(emptyForm);

    // Load saved reports from LocalStorage
    const [reports, setReports] = useState(() => {
        const savedReports = localStorage.getItem("siteReports");

        return savedReports ? JSON.parse(savedReports) : [];
    });

    // Save reports to LocalStorage whenever reports change
    useEffect(() => {
        localStorage.setItem(
            "siteReports",
            JSON.stringify(reports)
        );
    }, [reports]);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    // Save report
    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !formData.project ||
            !formData.date ||
            !formData.reportTitle ||
            !formData.workStatus
        ) {
            alert("Please fill all required fields.");
            return;
        }

        const newReport = {
            id: Date.now(),
            ...formData,
        };

        setReports((previousReports) => [
            ...previousReports,
            newReport,
        ]);

        alert("Site report saved successfully!");

        setFormData(emptyForm);
    };

    // Clear form
    const handleCancel = () => {
        setFormData(emptyForm);
    };

    return (
        <div className="site-reports-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="site-reports-header">

                <div>

                    <p className="site-reports-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Site Reports
                    </h1>

                    <p className="site-reports-description">
                        Create and manage construction site reports.
                    </p>

                </div>

            </div>


            {/* =========================
                CREATE REPORT FORM
            ========================= */}

            <div className="site-reports-card">

                <h2>
                    Create Site Report
                </h2>

                <form
                    className="site-reports-form"
                    onSubmit={handleSubmit}
                >

                    {/* PROJECT */}

                    <div className="form-group">

                        <label htmlFor="project">
                            Project *
                        </label>

                        <select
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Project
                            </option>

                            <option value="Chennai Building Project">
                                Chennai Building Project
                            </option>

                            <option value="Coimbatore Office Project">
                                Coimbatore Office Project
                            </option>

                        </select>

                    </div>


                    {/* DATE */}

                    <div className="form-group">

                        <label htmlFor="date">
                            Report Date *
                        </label>

                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                    </div>


                    {/* REPORT TITLE */}

                    <div className="form-group full-width">

                        <label htmlFor="reportTitle">
                            Report Title *
                        </label>

                        <input
                            id="reportTitle"
                            type="text"
                            name="reportTitle"
                            value={formData.reportTitle}
                            onChange={handleChange}
                            placeholder="Enter report title"
                        />

                    </div>


                    {/* SITE CONDITION */}

                    <div className="form-group">

                        <label htmlFor="siteCondition">
                            Site Condition
                        </label>

                        <select
                            id="siteCondition"
                            name="siteCondition"
                            value={formData.siteCondition}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Condition
                            </option>

                            <option value="Good">
                                Good
                            </option>

                            <option value="Normal">
                                Normal
                            </option>

                            <option value="Poor">
                                Poor
                            </option>

                        </select>

                    </div>


                    {/* WORK STATUS */}

                    <div className="form-group">

                        <label htmlFor="workStatus">
                            Work Status *
                        </label>

                        <select
                            id="workStatus"
                            name="workStatus"
                            value={formData.workStatus}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Status
                            </option>

                            <option value="On Track">
                                On Track
                            </option>

                            <option value="Delayed">
                                Delayed
                            </option>

                            <option value="Completed">
                                Completed
                            </option>

                        </select>

                    </div>


                    {/* ISSUES */}

                    <div className="form-group full-width">

                        <label htmlFor="issues">
                            Issues / Problems
                        </label>

                        <input
                            id="issues"
                            type="text"
                            name="issues"
                            value={formData.issues}
                            onChange={handleChange}
                            placeholder="Enter site issues or problems"
                        />

                    </div>


                    {/* DESCRIPTION */}

                    <div className="form-group full-width">

                        <label htmlFor="description">
                            Report Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter detailed site report"
                        ></textarea>

                    </div>


                    {/* BUTTONS */}

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-report-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-report-btn"
                        >
                            Save Site Report
                        </button>

                    </div>

                </form>

            </div>


            {/* =========================
                REPORT HISTORY
            ========================= */}

            <div className="site-reports-list">

                <div className="reports-list-header">

                    <div>

                        <p className="reports-list-label">
                            REPORT HISTORY
                        </p>

                        <h2>
                            Site Reports
                        </h2>

                    </div>

                    <span className="reports-count">
                        {reports.length} Reports
                    </span>

                </div>


                {/* EMPTY STATE */}

                {reports.length === 0 ? (

                    <div className="no-site-reports">
                        No site reports available.
                    </div>

                ) : (

                    /* REPORT TABLE */

                    <div className="site-reports-table-container">

                        <table className="site-reports-table">

                            <thead>

                                <tr>
                                    <th>Date</th>
                                    <th>Project</th>
                                    <th>Report Title</th>
                                    <th>Condition</th>
                                    <th>Work Status</th>
                                    <th>Issues</th>
                                    <th>Description</th>
                                </tr>

                            </thead>

                            <tbody>

                                {reports.map((report) => (

                                    <tr key={report.id}>

                                        <td>
                                            {report.date}
                                        </td>

                                        <td>
                                            <strong>
                                                {report.project}
                                            </strong>
                                        </td>

                                        <td>
                                            {report.reportTitle}
                                        </td>

                                        <td>
                                            {report.siteCondition || "-"}
                                        </td>

                                        <td>
                                            {report.workStatus}
                                        </td>

                                        <td>
                                            {report.issues || "-"}
                                        </td>

                                        <td>
                                            {report.description || "-"}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}

export default SiteReports;
```
