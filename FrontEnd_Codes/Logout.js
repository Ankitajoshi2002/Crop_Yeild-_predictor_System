import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage or any auth token
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <h1>🔒 Are you sure you want to log out?</h1>
      <button onClick={handleLogout} className="logout-button">
        Yes, Log Me Out
      </button>
    </div>
  );
};

export default Logout;
