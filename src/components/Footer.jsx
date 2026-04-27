import React from 'react';

const Footer = () => {
    return (
        <div className="ft">
            <div className="ft-top">
                <div className="ft-brand">
                    <p>Arcadia Events</p>
                    <small>Crafting timeless Italian<br />weddings since 2004.<br />Lake Como specialists.</small>
                </div>
                <div className="ft-col">
                    <h5>Navigate</h5>
                    <ul><li>Weddings</li><li>Locations</li><li>About</li><li>Journal</li></ul>
                </div>
                <div className="ft-col">
                    <h5>Services</h5>
                    <ul><li>Full Planning</li><li>Venue Selection</li><li>Floral Design</li><li>Photography</li></ul>
                </div>
                <div className="ft-col">
                    <h5>Contact</h5>
                    <ul><li>info@arcadiaevents.com</li><li>+39 031 000 0000</li><li>Lake Como, Italy</li></ul>
                </div>
            </div>
            <div className="ft-bot">
                <span>© 2026 Arcadia Events</span>
            </div>
        </div>
    );
};

export default Footer;