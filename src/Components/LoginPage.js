import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy credentials and token for testing
  const dummyEmail = "test@example.com";
  const dummyPassword = "password123";
  const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    // Simulate API request (commented out)
    /*
    try {
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
    */

    // For testing: Hardcoded email, password, and JWT token
    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem("token", dummyToken); // Save dummy token to localStorage
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo">
          <h2>Concern Worldwide</h2>
          <p>Climate Vulnerability and Capacity Analysis Dashboard</p>
        </div>
        <div className="placeholder-image">
          <p>Image TBD</p>
        </div>
      </div>
      <div className="right-panel">
        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <div className="form-actions">
              <button type="submit">Sign In</button>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
