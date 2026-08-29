import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        setError("");

        // Demo login
        navigate("/dashboard");
    };

    return (
        <div className="login-page">

            {/* Left Section */}
            <div className="login-brand-section">
                <div className="brand-content">
                    <div className="brand-logo">🏗️</div>

                    <h1>BuildTrack</h1>

                    <p>
                        Construction Management
                        <br />
                        made simple and efficient.
                    </p>

                    <div className="brand-features">
                        <div>
                            <span>✓</span>
                            Manage projects efficiently
                        </div>

                        <div>
                            <span>✓</span>
                            Track employees and tasks
                        </div>

                        <div>
                            <span>✓</span>
                            Monitor project progress
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="login-form-section">

                <div className="login-card">

                    <div className="mobile-logo">
                        🏗️
                    </div>

                    <div className="login-header">
                        <h2>Welcome Back</h2>

                        <p>
                            Sign in to your account to continue
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>

                        {/* Email */}
                        <div className="input-group">
                            <label>Email Address</label>

                            <div className="input-wrapper">
                                <span className="input-icon">✉</span>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="input-group">
                            <label>Password</label>

                            <div className="input-wrapper">
                                <span className="input-icon">🔒</span>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="login-error">
                                {error}
                            </div>
                        )}

                        <div className="login-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>

                            <button
                                type="button"
                                className="forgot-password"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign In
                            <span>→</span>
                        </button>

                    </form>

                    <div className="login-footer">
                        <p>
                            Construction Management System
                        </p>

                        <span>© 2026 BuildTrack</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;