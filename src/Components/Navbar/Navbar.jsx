import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="home-header">
      {/* Left section with logo */}
      <div className="header-left">
        <h1 className="brand">🚌 GoBus</h1>
      </div>

      {/* Navigation bar */}
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/Allbuses" className="nav-item">All Buses</Link></li>
          <li><Link to="/Addbus" className="nav-item">Add Bus</Link></li>

          {/* Conditional Sign In / Sign Out */}
          {isLoggedIn ? (
            <li>
              <button onClick={handleSignOut} className="nav-item sign-out-btn">
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="nav-item sign-in-btn">
                Sign In
              </Link>
              <Link to="/Signup" className="nav-item sign-in-btn">
                Sign up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
