import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123456") {
            navigate("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <div className="login-header">
                    <h1>Construction MS</h1>
                    <p>Project Management System</p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>

                </form>

                <p className="login-hint">
                    Demo: admin@gmail.com / 123456
                </p>

            </div>

        </div>
    );
}

export default Login;