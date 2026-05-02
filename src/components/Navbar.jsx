import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        Arcadia <span>Events</span>
      </div>

      <div className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li>
          <Link to="/data" className="nav-link">Data</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </div>

      <Link to="/contact">
        <button className="nav-button" style={{ marginTop: '1px' }}>
          Get a Quote
        </button>
      </Link>

    </nav>
  );
};

export default Navbar;