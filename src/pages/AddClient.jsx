import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddClient.css";

function AddClient() {
    const navigate = useNavigate();

    const countries = [
        { name: "India", code: "+91", maxLength: 10 },
        { name: "United States", code: "+1", maxLength: 10 },
        { name: "United Kingdom", code: "+44", maxLength: 10 },
        { name: "Australia", code: "+61", maxLength: 9 },
        { name: "Canada", code: "+1", maxLength: 10 },
        { name: "Singapore", code: "+65", maxLength: 8 },
        { name: "Malaysia", code: "+60", maxLength: 9 },
        { name: "UAE", code: "+971", maxLength: 9 },
        { name: "Saudi Arabia", code: "+966", maxLength: 9 },
    ];

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        phoneCode: "+91",
        email: "",
        location: "",
    });

    const selectedCountry =
        countries.find(
            (country) =>
                country.code === formData.phoneCode
        ) || countries[0];

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleCountryCodeChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            phoneCode: event.target.value,
            phone: "",
        }));
    };

    const handlePhoneChange = (event) => {
        const numbersOnly =
            event.target.value.replace(/\D/g, "");

        const limitedNumber =
            numbersOnly.slice(
                0,
                selectedCountry.maxLength
            );

        setFormData((previousData) => ({
            ...previousData,
            phone: limitedNumber,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            formData.phone.length !==
            selectedCountry.maxLength
        ) {
            alert(
                `Please enter a valid phone number.`
            );
            return;
        }

        const savedClients =
            JSON.parse(
                localStorage.getItem("clients")
            ) || {};

        const existingIds =
            Object.keys(savedClients).map(Number);

        const newId =
            existingIds.length > 0
                ? Math.max(...existingIds) + 1
                : 1;

        const newClient = {
            id: newId,
            name: formData.name,
            company: formData.company,

            phone: `${formData.phoneCode} ${formData.phone}`,

            email: formData.email,
            location: formData.location,
            projects: 0,
            status: "Active",
        };

        savedClients[newId] = newClient;

        localStorage.setItem(
            "clients",
            JSON.stringify(savedClients)
        );

        alert("Client added successfully!");

        navigate("/clients");
    };

    return (
        <div className="add-client-page">

            {/* Header */}
            <div className="add-client-header">

                <div>
                    <p className="add-client-label">
                        CLIENT MANAGEMENT
                    </p>

                    <h1>Add Client</h1>

                    <p>
                        Add a new client to your
                        construction project
                        management system.
                    </p>
                </div>

                <button
                    type="button"
                    className="add-client-back-btn"
                    onClick={() =>
                        navigate("/clients")
                    }
                >
                    ← Back to Clients
                </button>

            </div>

            {/* Form */}
            <form
                className="add-client-form"
                onSubmit={handleSubmit}
            >

                <div className="add-client-section">

                    <div className="add-section-title">

                        <div className="add-number">
                            01
                        </div>

                        <div>
                            <h2>
                                Client Information
                            </h2>

                            <p>
                                Enter the client's basic
                                information and contact
                                details.
                            </p>
                        </div>

                    </div>

                    <div className="add-client-grid">

                        {/* Full Name */}
                        <div className="add-form-group">

                            <label>
                                Full Name
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Company */}
                        <div className="add-form-group">

                            <label>
                                Company Name
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="company"
                                placeholder="Enter company name"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Phone */}
                        <div className="add-form-group">

                            <label>
                                Phone Number
                                <span>*</span>
                            </label>

                            <div className="phone-input-wrapper">

                                {/* Country Code */}
                                <select
                                    className="phone-code-select"
                                    value={
                                        formData.phoneCode
                                    }
                                    onChange={
                                        handleCountryCodeChange
                                    }
                                >
                                    {countries.map(
                                        (country) => (
                                            <option
                                                key={`${country.name}-${country.code}`}
                                                value={
                                                    country.code
                                                }
                                            >
                                                {country.name}{" "}
                                                {country.code}
                                            </option>
                                        )
                                    )}
                                </select>

                                {/* Phone Number */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    value={
                                        formData.phone
                                    }
                                    onChange={
                                        handlePhoneChange
                                    }
                                    maxLength={
                                        selectedCountry.maxLength
                                    }
                                    required
                                />

                            </div>

                            <small className="phone-help">
                                {
                                    selectedCountry.maxLength
                                }{" "}
                                digits required
                            </small>

                        </div>

                        {/* Email */}
                        <div className="add-form-group">

                            <label>
                                Email Address
                                <span>*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Location */}
                        <div className="add-form-group">

                            <label>
                                Location
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="location"
                                placeholder="Enter city / location"
                                value={
                                    formData.location
                                }
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="add-client-footer">

                    <button
                        type="button"
                        className="add-cancel-btn"
                        onClick={() =>
                            navigate("/clients")
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="add-save-btn"
                    >
                        Add Client
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddClient;