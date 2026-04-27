import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nl">Arcadia <span>Events</span></div>
      <ul className="nm">
        <li><Link to="/">Weddings</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/data">Journal</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/contact">
        <button className="nb">Get a Quote</button>
      </Link>
    </div>
  );
};

export default Navbar;