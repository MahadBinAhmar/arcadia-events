import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-col">
                    <h2 className="footer-brand">ARCADIA EVENTS</h2>
                    <p className="footer-text">
                        Crafting timeless Italian<br />
                        weddings since 2004.<br />
                        Lake Como specialists.
                    </p>
                </div>

                <div className="footer-col">
                    <h3 className="footer-heading">NAVIGATE</h3>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/about" className="footer-link">About</Link></li>
                        <li><Link to="/services" className="footer-link">Services</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-heading">SERVICES</h3>
                    <ul className="footer-links">
                        <li><Link to="/services/full-planning" className="footer-link">Full Planning</Link></li>
                        <li><Link to="/services/venue-selection" className="footer-link">Venue Selection</Link></li>
                        <li><Link to="/services/floral-design" className="footer-link">Floral Design</Link></li>
                        <li><Link to="/services/photography" className="footer-link">Photography</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-heading">CONTACT</h3>
                    <ul className="footer-links">
                        <li><a href="mailto:info@arcadiaevents.com" className="footer-link">info@arcadiaevents.com</a></li>
                        <li><a href="tel:+390310000000" className="footer-link">+39 031 000 0000</a></li>
                        <li><span className="footer-link-text">Lake Como, Italy</span></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 ARCADIA EVENTS</p>
            </div>
        </footer>
    );
};

export default Footer;