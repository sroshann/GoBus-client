import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/" className="nav-item">All buses</Link></li>
        <li><Link to="/Contact" className="nav-item">Contact</Link></li>

        {/* Conditional Sign In / Sign Out */}
        {isLoggedIn ? (
          <li>
            <button onClick={handleSignOut} className="nav-item sign-out-btn">
              Sign Out
            </button>
          </li>
        ) : (
          <li><Link to="/login" className="nav-item"></Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
