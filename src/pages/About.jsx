import React from 'react';
import { Link } from 'react-router-dom';

import SectionHeading from '../components/ui/SectionHeading';
import Hero from '../components/ui/Hero';
import ImageBanner from '../components/ui/ImageBanner';
import '../styles/About.css';

import villaDesteImg from '../assets/villa-deste.webp';

const About = () => {
    return (
        <div className="full-width">

            <Hero
                eyebrow="Our Philosophy"
                title={
                    <span>
                        Celebrating Love, <br />
                        <em>Crafting Legacy</em>
                    </span>
                }
                subtitle="Two decades of passion, precision, and poetry — woven into every wedding we have the privilege to orchestrate."
            />

            <div className="about-story-grid">

                <ImageBanner
                    image={villaDesteImg}
                    caption="Happy couples, Villa d'Este"
                />

                <div className="about-content">
                    <SectionHeading
                        eyebrow="Who We Are"
                        title="Born from a passion"
                        align="left"
                    />
                    <p className="text-muted" style={{ fontSize: '18px', marginBottom: '12px' }}>
                        Arcadia Events was founded in 2004 by Sofia Conti, an Italian wedding designer with a lifelong devotion to the art of celebration.
                    </p>
                    <p className="text-muted" style={{ fontSize: '15px' }}>
                        Our team works in perfect harmony to transform each client's vision into a living masterpiece.
                    </p>
                </div>
            </div>

            <div className="about-features-grid">

                <div className="about-feature-item">
                    <h2 className="about-feature-title">Excellence</h2>
                    <p className="text-muted" style={{ fontSize: '15px' }}>
                        Rooted in Italian tradition, elevated by contemporary vision.
                    </p>
                </div>

                <div className="about-feature-item">
                    <h2 className="about-feature-title">Intimacy</h2>
                    <p className="text-muted" style={{ fontSize: '15px' }}>
                        Rooted in Italian tradition, elevated by contemporary vision.
                    </p>
                </div>

                <div className="about-feature-item">
                    <h2 className="about-feature-title">Heritage</h2>
                    <p className="text-muted" style={{ fontSize: '15px' }}>
                        Rooted in Italian tradition, elevated by contemporary vision.
                    </p>
                </div>

            </div>

            <div className="about-cta-section" style={{ textAlign: 'center', paddingBottom: '60px' }}>
                <SectionHeading
                    eyebrow="Begin Your Journey"
                    title="Ready to design your dream day?"
                    align="center"
                    dark={false}
                />

                <Link to="/contact">
                    <button className="btn">Get a Quote</button>
                </Link>
            </div>

        </div>
    );
};

export default About;