import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../components/ui/Divider';
import SectionHeading from '../components/ui/SectionHeading';
import Hero from '../components/ui/Hero';
import ImageBanner from '../components/ui/ImageBanner';
import '../styles/Home.css';

import villaBalbianelloImg from '../assets/villa-balbianello.webp';

const Home = () => {
    return (
        <div className="full-width">

            <Hero
                eyebrow="Lake Como · Italy · Est. 2004"
                title={
                    <span>
                        Lake Como<br /><em>Wedding</em>
                    </span>
                }
                subtitle="Your love story, magnificently told"
            >
                <Link to="/services">
                    <button className="btn">Discover Our World</button>
                </Link>
            </Hero>

            <div className="home-intro">
                <Divider className="mb-5" />
                <p className="home-intro-text">
                    <strong>As your exclusive wedding partners</strong>, we craft timeless celebrations across the most romantic landscapes of Italy — where every detail becomes a cherished memory.
                </p>
                <Divider className="mt-5" />
            </div>

            <div className="home-stats-grid">

                <div className="home-stat-item">
                    <div className="home-stat-num">20+</div>
                    <div className="text-eyebrow home-stat-label">Years of Excellence</div>
                </div>

                <div className="home-stat-item">
                    <div className="home-stat-num">840</div>
                    <div className="text-eyebrow home-stat-label">Weddings Crafted</div>
                </div>

                <div className="home-stat-item">
                    <div className="home-stat-num">14</div>
                    <div className="text-eyebrow home-stat-label">Italian Locations</div>
                </div>

                <div className="home-stat-item">
                    <div className="home-stat-num">98%</div>
                    <div className="text-eyebrow home-stat-label">Client Satisfaction</div>
                </div>

            </div>

            <div className="home-story-grid">

                <ImageBanner
                    image={villaBalbianelloImg}
                    caption="Villa Balbianello, Lake Como"
                />

                <div className="home-story-content">
                    <SectionHeading
                        eyebrow="Our Story"
                        title="Where every moment becomes a masterpiece"
                        align="left"
                    />

                    <p className="text-muted">
                        Nestled between the serene waters of Lake Como and the timeless elegance of northern Italy, Arcadia Events has been orchestrating extraordinary celebrations since 2004.
                    </p>

                    <Link to="/about" style={{ marginTop: '16px', display: 'inline-block' }}>
                        <button className="btn">Read our full story</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;