import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleFindRoutes = () => {
    alert(`Searching buses from ${from} to ${to}...`);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="brand">🚌 GoBus</h1>
        <div className="header-right">
          <span className="clock">{new Date().toLocaleTimeString()}</span>
          <button className="gps-btn">Live GPS</button>
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

      {/* Stats Section (Removed Delay + Passengers) */}
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
            <h3>Route 22 — Beach Front</h3>
            <p>🕒 14:35 | Platform A2 | 92% capacity | AC + Charging</p>
            <p className="stops">Stops: Sports Complex • Marina • Seaside Resort</p>
          </div>
          <span className="status arriving">Arriving</span>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 GoBus Transit | Real-time bus tracking</p>
      </footer>
    </div>
  );
}

export default Home;
