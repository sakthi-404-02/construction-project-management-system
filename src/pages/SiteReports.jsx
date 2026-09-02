import React, { useState } from "react";
import "../styles/SiteReports.css";

function SiteReports() {

    const [reports, setReports] = useState([]);

    const [formData, setFormData] = useState({
        project: "",
        reportDate: "",
        weather: "",
        workCompleted: "",
        workersPresent: "",
        issues: "",
    });


    /* =========================
       HANDLE INPUT CHANGE
    ========================= */

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

    };


    /* =========================
       SAVE REPORT
    ========================= */

    const handleSubmit = (event) => {

        event.preventDefault();

        const newReport = {
            id: Date.now(),
            ...formData,
        };

        setReports((previousReports) => [
            ...previousReports,
            newReport,
        ]);


        setFormData({
            project: "",
            reportDate: "",
            weather: "",
            workCompleted: "",
            workersPresent: "",
            issues: "",
        });

        alert("Site report saved successfully!");

    };


    return (

        <div className="site-reports-page">


            {/* =========================
                HEADER
            ========================= */}

            <div className="site-reports-header">

                <p className="site-reports-label">
                    CONSTRUCTION MANAGEMENT
                </p>

                <h1>
                    Site Reports
                </h1>

                <p className="site-reports-description">
                    Create and manage daily site reports.
                </p>

            </div>


            {/* =========================
                CREATE REPORT
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

                    <div className="site-reports-form-group">

                        <label>
                            Project Name
                        </label>

                        <input
                            type="text"
                            name="project"
                            placeholder="Enter project name"
                            value={formData.project}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* DATE */}

                    <div className="site-reports-form-group">

                        <label>
                            Report Date
                        </label>

                        <input
                            type="date"
                            name="reportDate"
                            value={formData.reportDate}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* WEATHER */}

                    <div className="site-reports-form-group">

                        <label>
                            Weather Condition
                        </label>

                        <select
                            name="weather"
                            value={formData.weather}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select weather
                            </option>

                            <option value="Sunny">
                                Sunny
                            </option>

                            <option value="Cloudy">
                                Cloudy
                            </option>

                            <option value="Rainy">
                                Rainy
                            </option>

                        </select>

                    </div>


                    {/* WORKERS */}

                    <div className="site-reports-form-group">

                        <label>
                            Workers Present
                        </label>

                        <input
                            type="number"
                            name="workersPresent"
                            placeholder="Enter number of workers"
                            value={formData.workersPresent}
                            onChange={handleChange}
                            min="0"
                            required
                        />

                    </div>


                    {/* WORK COMPLETED */}

                    <div className="site-reports-form-group full-width">

                        <label>
                            Work Completed
                        </label>

                        <textarea
                            name="workCompleted"
                            placeholder="Describe the work completed today"
                            value={formData.workCompleted}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* ISSUES */}

                    <div className="site-reports-form-group full-width">

                        <label>
                            Issues / Remarks
                        </label>

                        <textarea
                            name="issues"
                            placeholder="Enter any issues or remarks"
                            value={formData.issues}
                            onChange={handleChange}
                        />

                    </div>


                    {/* SAVE BUTTON */}

                    <div className="site-reports-form-actions">

                        <button
                            type="submit"
                            className="save-report-btn"
                        >
                            Save Report
                        </button>

                    </div>

                </form>

            </div>


            {/* =========================
                REPORT LIST
            ========================= */}

            <div className="site-reports-list">


                <div className="reports-list-header">

                    <div>

                        <p className="reports-list-label">
                            SITE REPORTS
                        </p>

                        <h2>
                            All Reports
                        </h2>

                    </div>


                    <div className="reports-count">

                        {reports.length} Reports

                    </div>

                </div>


                {reports.length === 0 ? (

                    <div className="no-site-reports">

                        No site reports available.

                    </div>

                ) : (

                    <div className="site-reports-table-container">

                        <table className="site-reports-table">

                            <thead>

                            <tr>

                                <th>
                                    Project
                                </th>

                                <th>
                                    Date
                                </th>

                                <th>
                                    Weather
                                </th>

                                <th>
                                    Workers
                                </th>

                                <th>
                                    Work Completed
                                </th>

                                <th>
                                    Issues
                                </th>

                            </tr>

                            </thead>


                            <tbody>

                            {reports.map((report) => (

                                <tr key={report.id}>

                                    <td>

                                        <strong>
                                            {report.project}
                                        </strong>

                                    </td>


                                    <td>
                                        {report.reportDate}
                                    </td>


                                    <td>
                                        {report.weather}
                                    </td>


                                    <td>
                                        {report.workersPresent}
                                    </td>


                                    <td>
                                        {report.workCompleted}
                                    </td>


                                    <td>
                                        {report.issues || "-"}
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