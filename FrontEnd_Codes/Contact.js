import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "message") {
      setCharCount(e.target.value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message and will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  return (
    <div className="contact-container">
      <h1>📬 Contact Us</h1>
      <p className="intro-text">
        We’re here to assist you! If you have any questions, feedback, or suggestions, don’t hesitate to reach out to us.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <span className="char-count">{charCount}/500</span>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
