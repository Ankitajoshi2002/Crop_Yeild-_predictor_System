import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>🌾 About Crop Yield Predictor</h1>
        <p>
          Empowering farmers with <strong>data-driven insights</strong> to enhance
          agricultural productivity and sustainability.
        </p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>📌 What We Do</h2>
          <p>
            Our platform uses machine learning, climate data, and soil information
            to deliver accurate crop yield predictions.
          </p>
        </div>

        <div className="about-section">
          <h2>🌱 Why It Matters</h2>
          <p>
            Predictive analytics help farmers improve resource management,
            productivity, and contribute to food security.
          </p>
        </div>

        <div className="about-section">
          <h2>🔍 Key Features</h2>
          <ul>
            <li><strong>📊 Data-Driven Insights:</strong> Leverage AI models and historical data for precision.</li>
            <li><strong>🌦 Climate Analysis:</strong> Understand rainfall, temperature, and seasonal patterns.</li>
            <li><strong>🗺 Soil Type Integration:</strong> Fine-tune predictions using soil composition data.</li>
            <li><strong>📡 Real-Time Monitoring:</strong> Stay updated with dynamic agricultural conditions.</li>
            <li><strong>🌍 Sustainability:</strong> Promote eco-friendly and efficient farming methods.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>👨‍🌾 How Farmers Benefit</h2>
          <ul>
            <li>Choose suitable crops based on soil and season.</li>
            <li>Boost yield and income with smarter planning.</li>
            <li>Cut losses by optimizing pesticide and water use.</li>
            <li>Adopt precision agriculture for better decision-making.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🚀 Our Vision</h2>
          <p>
            To make advanced agricultural technology accessible for every farmer,
            regardless of location or scale.
          </p>
        </div>

        <div className="about-section">
          <h2>🌍 Our Commitment</h2>
          <p>
            Supporting sustainable farming and global food security through
            innovation and accessibility.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Developed with ❤️ to uplift global agriculture.</p>
      </footer>
    </div>
  );
};

export default About;
