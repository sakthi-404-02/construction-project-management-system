import { useEffect, useState } from "react";
import "../styles/DailyProgress.css";

function DailyProgress() {
    const emptyForm = {
        project: "",
        date: "",
        workCompleted: "",
        workers: "",
        materialsUsed: "",
        progress: "",
        description: "",
    };

    const [formData, setFormData] = useState(emptyForm);

    const [progressRecords, setProgressRecords] = useState(() => {
        const savedRecords = localStorage.getItem("dailyProgressRecords");

        return savedRecords ? JSON.parse(savedRecords) : [];
    });

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "dailyProgressRecords",
            JSON.stringify(progressRecords)
        );
    }, [progressRecords]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !formData.project ||
            !formData.date ||
            !formData.workCompleted ||
            !formData.workers ||
            !formData.progress
        ) {
            alert("Please fill all required fields.");
            return;
        }

        const progressValue = Number(formData.progress);

        if (progressValue < 0 || progressValue > 100) {
            alert("Progress must be between 0 and 100.");
            return;
        }

        if (editingId !== null) {
            setProgressRecords((previousRecords) =>
                previousRecords.map((record) =>
                    record.id === editingId
                        ? {
                            ...record,
                            ...formData,
                        }
                        : record
                )
            );

            alert("Daily progress updated successfully!");

            setEditingId(null);
        } else {
            const newRecord = {
                id: Date.now(),
                ...formData,
            };

            setProgressRecords((previousRecords) => [
                ...previousRecords,
                newRecord,
            ]);

            alert("Daily progress saved successfully!");
        }

        setFormData(emptyForm);
    };

    const handleEdit = (record) => {
        setFormData({
            project: record.project,
            date: record.date,
            workCompleted: record.workCompleted,
            workers: record.workers,
            materialsUsed: record.materialsUsed,
            progress: record.progress,
            description: record.description,
        });

        setEditingId(record.id);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this record?"
        );

        if (!confirmDelete) {
            return;
        }

        setProgressRecords((previousRecords) =>
            previousRecords.filter((record) => record.id !== id)
        );

        alert("Daily progress deleted successfully!");

        if (editingId === id) {
            setEditingId(null);
            setFormData(emptyForm);
        }
    };

    const handleCancel = () => {
        setFormData(emptyForm);
        setEditingId(null);
    };

    return (
        <div className="daily-progress-page">

            {/* HEADER */}

            <div className="daily-progress-header">

                <div>

                    <p className="daily-progress-label">
                        PROJECT MANAGEMENT
                    </p>

                    <h1>
                        Daily Progress
                    </h1>

                    <p className="daily-progress-description">
                        Track daily construction work and project progress.
                    </p>

                </div>

            </div>


            {/* FORM */}

            <div className="daily-progress-card">

                <h2>
                    {editingId !== null
                        ? "Edit Daily Progress"
                        : "Add Daily Progress"}
                </h2>

                <form
                    className="daily-progress-form"
                    onSubmit={handleSubmit}
                >

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


                    <div className="form-group">

                        <label htmlFor="date">
                            Date *
                        </label>

                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-group full-width">

                        <label htmlFor="workCompleted">
                            Work Completed *
                        </label>

                        <input
                            id="workCompleted"
                            type="text"
                            name="workCompleted"
                            value={formData.workCompleted}
                            onChange={handleChange}
                            placeholder="Enter completed work"
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="workers">
                            Workers *
                        </label>

                        <input
                            id="workers"
                            type="number"
                            name="workers"
                            value={formData.workers}
                            onChange={handleChange}
                            placeholder="Number of workers"
                            min="0"
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="materialsUsed">
                            Materials Used
                        </label>

                        <input
                            id="materialsUsed"
                            type="text"
                            name="materialsUsed"
                            value={formData.materialsUsed}
                            onChange={handleChange}
                            placeholder="Enter materials used"
                        />

                    </div>


                    <div className="form-group full-width">

                        <label htmlFor="progress">
                            Progress Percentage *
                        </label>

                        <input
                            id="progress"
                            type="number"
                            name="progress"
                            value={formData.progress}
                            onChange={handleChange}
                            placeholder="Enter progress percentage"
                            min="0"
                            max="100"
                        />

                    </div>


                    <div className="form-group full-width">

                        <label htmlFor="description">
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter daily progress description"
                        ></textarea>

                    </div>


                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-progress-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-progress-btn"
                        >
                            {editingId !== null
                                ? "Update Progress"
                                : "Save Progress"}
                        </button>

                    </div>

                </form>

            </div>


            {/* RECORDS */}

            <div className="daily-progress-records">

                <div className="records-header">

                    <div>

                        <p className="records-label">
                            PROGRESS HISTORY
                        </p>

                        <h2>
                            Daily Progress Records
                        </h2>

                    </div>

                    <span className="records-count">
                        {progressRecords.length} Records
                    </span>

                </div>


                {progressRecords.length === 0 ? (

                    <div className="no-progress-records">
                        No daily progress records available.
                    </div>

                ) : (

                    <div className="progress-table-container">

                        <table className="progress-table">

                            <thead>

                            <tr>

                                <th>Date</th>
                                <th>Project</th>
                                <th>Work Completed</th>
                                <th>Workers</th>
                                <th>Materials</th>
                                <th>Progress</th>
                                <th>Actions</th>

                            </tr>

                            </thead>

                            <tbody>

                            {progressRecords.map((record) => (

                                <tr key={record.id}>

                                    <td>
                                        {record.date}
                                    </td>

                                    <td>
                                        <strong>
                                            {record.project}
                                        </strong>
                                    </td>

                                    <td>
                                        {record.workCompleted}
                                    </td>

                                    <td>
                                        {record.workers}
                                    </td>

                                    <td>
                                        {record.materialsUsed || "-"}
                                    </td>

                                    <td>

                                        <div className="progress-cell">

                                            <div className="progress-bar">

                                                <div
                                                    className="progress-bar-fill"
                                                    style={{
                                                        width: `${record.progress}%`,
                                                    }}
                                                ></div>

                                            </div>

                                            <span>
                                                    {record.progress}%
                                                </span>

                                        </div>

                                    </td>

                                    <td>

                                        <button
                                            type="button"
                                            className="progress-edit-btn"
                                            onClick={() =>
                                                handleEdit(record)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            className="progress-delete-btn"
                                            onClick={() =>
                                                handleDelete(record.id)
                                            }
                                        >
                                            Delete
                                        </button>

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

export default DailyProgress;