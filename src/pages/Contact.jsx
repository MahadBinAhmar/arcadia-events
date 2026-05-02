import React, { useState } from 'react';
import Hero from '../components/ui/Hero';

import '../styles/Contact.css';

const Contact = () => {

    const [form, setForm] = useState({
        name: '', email: '', date: '', guests: '', message: ''
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmailError(value && !value.includes('@') ? 'Please enter a valid email.' : '');
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            return;
        }

        alert(`Grazie ${form.name}! We will be in touch soon.`);
        setForm({ name: '', email: '', date: '', guests: '', message: '' });
    };

    return (
        <div className="full-width">

            <Hero eyebrow="Get in Touch" title="Begin Your Italian Story" />

            <div className="contact-grid">

                <div className="contact-info-panel">
                    <p className="contact-info-eyebrow">Reach Us</p>
                    <h2 className="contact-info-title">Let us plan<br /><em>your perfect day</em></h2>
                    <p className="contact-info-subtitle">Every extraordinary wedding begins with a single conversation.</p>

                    <div className="contact-info-item">
                        <div className="contact-info-label">Email</div>
                        <div className="contact-info-value">info@arcadiaevents.com</div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-label">Studio</div>
                        <div className="contact-info-value">Via Roma 14, Cernobbio, Italy</div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form-panel">
                    <h2 className="contact-form-title">Tell us about your wedding</h2>

                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label className="contact-label">Name *</label>
                            <input required type="text" name="name" value={form.name} onChange={handleChange} className="contact-input" />
                        </div>
                        <div className="contact-field">
                            <label className="contact-label">Email *</label>
                            <input required type="email" name="email" value={form.email} onChange={handleChange} className="contact-input" />
                            {emailError && <span className="contact-error">{emailError}</span>}
                        </div>
                    </div>

                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label className="contact-label">Wedding Date</label>
                            <input type="text" name="date" value={form.date} onChange={handleChange} className="contact-input" />
                        </div>
                        <div className="contact-field">
                            <label className="contact-label">Number of Guests</label>
                            <input type="text" name="guests" value={form.guests} onChange={handleChange} className="contact-input" />
                        </div>
                    </div>

                    <div className="contact-field">
                        <label className="contact-label">Message *</label>
                        <textarea required name="message" value={form.message} onChange={handleChange} className="contact-textarea" />
                    </div>

                    <button type="submit" className="btn">Send Enquiry</button>
                </form>

            </div>
        </div>
    );
};

export default Contact;