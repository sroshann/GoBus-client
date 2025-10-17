import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged-in state

  const handleAuthToggle = () => {
    setIsLoggedIn((prev) => !prev);
    console.log(isLoggedIn ? 'User signed out' : 'User signed in');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Feedback submitted:', { name, email, message });
    setSubmitted(true);

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <div className="home-container">
        <header className="home-header">
          {/* 1. Logo */}
          <div className="header-left">
            <h1 className="brand">🚌 GoBus</h1>
          </div>

          {/* 2. Navbar */}
          <Navbar />

          {/* 3. Auth Buttons */}
          <div className="header-right">
            {isLoggedIn ? (
              <button className="sign-in-up-btn" onClick={handleAuthToggle}>
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/login" className="sign-in-up-btn">
                  Sign In
                </Link>
                <Link to="/signup" className="sign-in-up-btn">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </header>

        {/* Contact Content */}
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Reach out for support, feedback, or any inquiries about GoBus services.</p>

          <div className="contact-details">
            <div className="info-card">
              <h3>Phone</h3>
              <p>📞 +91 8921111515</p>
            </div>
            <div className="info-card">
              <h3>Email</h3>
              <p>📧 support@gobus.com</p>
            </div>
          </div>

          {submitted ? (
            <div className="success-message">
              ✅ Thank you, {name}! Your message has been sent.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  placeholder="you@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  value={message}
                  placeholder="Write your message..."
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  required
                />
              </label>

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Contact;
