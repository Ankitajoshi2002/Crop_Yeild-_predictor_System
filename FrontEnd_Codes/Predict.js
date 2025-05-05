import React from "react";
import { useNavigate } from "react-router-dom";
import "./Predict.css"; // Import external CSS

const Predict = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handlePredictionClick = () => {
    navigate("/PForm"); // Redirect user to Prediction_Form.js
  };

  return (
    <div className="predict-container">
      <h1>🌾 Crop Yield Prediction</h1>
      <p>Analyze soil data, weather patterns, and optimize agricultural productivity.</p>
      
      {/* Make Prediction Button with External CSS */}
      <button className="prediction-button" onClick={handlePredictionClick}>
        Make Prediction
      </button>
    </div>
  );
};

export default Predict;