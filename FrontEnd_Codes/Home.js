import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>🌾 Crop Yield Predictor</h1>
        <p>Empowering farmers with intelligent tools for smarter farming decisions.</p>
      </header>

      <section className="intro-section">
        <h2>🚜 Revolutionizing Agriculture</h2>
        <p>
          Our platform leverages <strong>AI</strong>, <strong>climate data</strong>,
          and <strong>soil analysis</strong> to predict crop yield with high accuracy.
          Designed for modern farmers aiming to boost productivity sustainably.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>📊 AI-Powered Predictions</h3>
          <p>Use machine learning algorithms trained on historical and real-time data for reliable yield forecasting.</p>
        </div>
        <div className="feature-card">
          <h3>🌱 Soil Intelligence</h3>
          <p>Get insights into soil health, type, and compatibility with different crops.</p>
        </div>
        <div className="feature-card">
          <h3>☁️ Weather Integration</h3>
          <p>Adapt plans using seasonal weather patterns, rainfall, and temperature analysis.</p>
        </div>
        <div className="feature-card">
          <h3>📍 Region-Specific Suggestions</h3>
          <p>Receive crop suggestions tailored to your location and climate zone.</p>
        </div>
        <div className="feature-card">
          <h3>🧪 Resource Optimization</h3>
          <p>Minimize costs by calculating precise amounts of water, fertilizer, and pesticide needed.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>🌐 Join the Smart Farming Movement</h2>
        <p>Start predicting your next yield today — improve accuracy, reduce waste, and grow more efficiently.</p>
        <a href="/prediction" className="cta-button">Get Started</a>
      </section>

      <footer className="footer">
        <p>Developed with ❤️ for sustainable agriculture and empowered farmers.</p>
      </footer>
    </div>
  );
};

export default Home;
