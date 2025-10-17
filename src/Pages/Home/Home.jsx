import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  // 🛑 NEW STATE: Tracks if the user is authenticated
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleFindRoutes = () => {
    console.log(`Searching buses from ${from} to ${to}...`);
  };

  // 🛑 NEW FUNCTION: Toggles the authentication status
  const handleAuthToggle = () => {
    // In a real application, this would call Firebase signOut()
    // or set a token to null. Here we just flip the state.
    const newState = !isLoggedIn;
    setIsLoggedIn(newState);
    console.log(newState ? 'User signed in (simulated)' : 'User signed out (simulated)');
  };

  return (
    <>
      
      <div className="home-container">
        <header className="home-header">
          {/* 1. Logo */}
          <div className="header-left"> 
             <h1 className="brand">🚌 GoBus</h1>
          </div>
          
          {/* 2. Navigation */}
          < Navbar />
          
          {/* 3. Auth Buttons (Conditional Rendering) */}
          <div className="header-right">
            {isLoggedIn ? (
              // Case 1: User is logged in -> Show Sign Out Button
              <button 
                className="sign-in-up-btn" 
                onClick={handleAuthToggle}
              >
                Sign Out
              </button>
            ) : (
              // Case 2: User is logged out -> Show Sign In and Sign Up Links
              <>
                <Link to="/login" className="sign-in-up-btn">Sign In</Link>
                <Link to="/signup" className="sign-in-up-btn">Sign Up</Link>
              </>
            )}
          </div>
          
        </header>

        <section className="journey-planner">
          <h2>Plan Your Journey</h2>
          <p>Select your departure and arrival stations to view available routes.</p>

          <div className="input-section">
            <div className="input-box">
              <label>From</label>
              <input
                type="text"
                placeholder="Enter start location"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <button className="swap-btn" onClick={handleSwap}>⇄</button>

            <div className="input-box">
              <label>To</label>
              <input
                type="text"
                placeholder="Enter destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <button className="find-btn" onClick={handleFindRoutes}>Find Routes</button>
          </div>

          {from && to && (
            <div className="selected-route">
              <p>Selected Route: <b>{from} ➜ {to}</b></p>
            </div>
          )}
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h3>Active Buses</h3>
            <p className="stat-value">24</p>
          </div>
          <div className="stat-card">
            <h3>Routes Operating</h3>
            <p className="stat-value">12/15</p>
          </div>
        </section>

        <section className="system-status">
          <div className="status-card">
            <h3>System Status: <span className="good">All Good ✅</span></h3>
            <p>All bus routes are operating normally. Real-time tracking is active across the network.</p>
          </div>
        </section>

        <section className="departures-section">
          <h2>Departures</h2>

          <div className="bus-card">
            <div className="bus-info">
              <h3>Route 15 — Downtown Plaza</h3>
              <p>🕒 14:25 | Platform A1 | 85% capacity | AC + WiFi</p>
              <p className="stops">Stops: Central Park • Mall Junction • City Hall • Metro Station</p>
            </div>
            <span className="status ontime">On Time</span>
          </div>

          <div className="bus-card">
            <div className="bus-info">
              <h3>Route 8 — Airport Terminal</h3>
              <p>🕒 14:30 | Platform B3 | 45% capacity | WiFi</p>
              <p className="stops">Stops: University • Shopping Center • Hotel District</p>
            </div>
            <span className="status delayed">Delayed 7m</span>
          </div>

          <div className="bus-card">
            <div className="bus-info">
              <h3>Route 22 — Beach Front</h3>
              <p>🕒 14:35 | Platform A2 | 92% capacity | AC + Charging</p>
              <p className="stops">Stops: Sports Complex • Marina • Seaside Resort</p>
            </div>
            <span className="status arriving">Arriving</span>
          </div>
        </section>

        <Footer />
      </div>

    </>
  );
}

export default Home;
