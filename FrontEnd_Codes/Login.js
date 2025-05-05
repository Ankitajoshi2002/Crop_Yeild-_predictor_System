import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // To display error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);

      if (response.data.success) {
        // Assuming your backend returns a token on successful login
        localStorage.setItem("authToken", response.data.token);
        setIsLoggedIn(true); // Set login state to true
        alert("Login successful!");
        navigate("/"); // Redirect to the homepage
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("Login error: ", err);
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Show error message if login fails */}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
