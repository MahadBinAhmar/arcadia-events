import React, { useState } from 'react';
import Divider from '../components/Divider';

const Contact = () => {
    // SMART OBJECT Trick
    const [form, setForm] = useState({
        name: '', email: '', date: '', guests: '', message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${form.name}! We will review your enquiry for ${form.date}.`);
        setForm({ name: '', email: '', date: '', guests: '', message: '' }); // Reset
    };

    return (
        <div className="w">
            <div className="ct-hero">
                <div className="ct-hero-c">
                    <div className="sey">Get in Touch</div>
                    <h1>Begin Your<br /><em style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>Italian Story</em></h1>
                    <Divider style={{ marginTop: '14px' }} dark={true} />
                </div>
            </div>

            <div className="ct-body">
                <div className="ct-info">
                    <div className="sey">Reach Us</div>
                    <h2>Let us plan your<br /><em style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>perfect day</em></h2>
                    <p>Every extraordinary wedding begins with a single conversation. Share your vision, your date, your dreams.</p>
                    <Divider style={{ justifyContent: 'flex-start', margin: '20px 0' }} dark={true} />
                    <div className="ct-detail"><div className="ct-detail-lbl">Email</div><div className="ct-detail-val">info@arcadiaevents.com</div></div>
                    <div className="ct-detail"><div className="ct-detail-lbl">Phone</div><div className="ct-detail-val">+39 031 000 0000</div></div>
                </div>

                {/* REACT FORM */}
                <form onSubmit={handleSubmit} className="ct-form">
                    <div className="sey">Your Enquiry</div>
                    <h2>Tell us about your wedding</h2>
                    <div className="frow">
                        <div className="ff"><label>Your Name</label><input required name="name" value={form.name} onChange={handleChange} placeholder="Sofia Russo" /></div>
                        <div className="ff"><label>Your Email</label><input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="sofia@email.com" /></div>
                    </div>
                    <div className="frow">
                        <div className="ff"><label>Wedding Date</label><input name="date" value={form.date} onChange={handleChange} placeholder="June 14, 2026" /></div>
                        <div className="ff"><label>Guest Count</label><input name="guests" value={form.guests} onChange={handleChange} placeholder="80 guests" /></div>
                    </div>
                    <div className="ff"><label>Your Message</label><textarea required name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your dream wedding..."></textarea></div>
                    <button type="submit" className="fsub">Send Enquiry</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;