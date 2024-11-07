    // src/components/Login.jsx

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://backend-password-reset-1jmk.onrender.com/api/auth/login", { email, password });
            setMessage(response.data.message);
            // Handle successful login (e.g., redirect or store token)
        } catch (error) {
            setMessage(error.response?.data?.error || "An error occurred");
        }
    };

    return (
        <div style={{ maxWidth:"400px", margin:"auto", padding:"20px", backgroundColor:"#fff", borderRadius:"8px", boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ textAlign:"center" }}>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"4px", border:"1px solid #ccc" }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    style={{ width:"100%", padding:"10px", marginBottom:"10px", borderRadius:"4px", border:"1px solid #ccc" }}
                />
                <button type="submit" style={{ width:"100%", padding:"10px", backgroundColor:"#007bff", color:"#fff", borderRadius:"4px", border:"none" }}>Login</button>
            </form>
            {message && <p style={{ textAlign:"center" }}>{message}</p>}
        </div>
    );
};

export default Login;