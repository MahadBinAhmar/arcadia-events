import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../components/Divider';

const Home = () => {
    return (
        <div className="w">
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-sky"></div>
                <div className="hero-sun"></div>
                <div className="hero-glow"></div>

                {/* SVG Mountains from your HTML */}
                <svg className="hmtn" viewBox="0 0 680 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,120 L0,70 L60,35 L120,55 L190,15 L260,50 L310,8 L370,48 L440,22 L510,58 L570,28 L640,65 L680,45 L680,120Z" fill="rgba(22,38,28,.75)" />
                    <path d="M0,120 L0,85 L80,68 L150,82 L220,52 L290,78 L360,44 L420,72 L490,50 L560,75 L620,55 L680,75 L680,120Z" fill="rgba(14,28,44,.85)" />
                </svg>
                <div className="hwtr"></div>

                <div className="hero-c">
                    <div className="hero-ey">Lake Como · Italy · Est. 2004</div>
                    <div className="hero-t">Lake Como<br /><em>Wedding</em></div>
                    <Divider style={{ margin: '16px 0 6px' }} dark={true} />
                    <div className="hero-sub">Your love story, magnificently told</div>
                    <Link to="/services">
                        <button className="hcta">Discover Our World</button>
                    </Link>
                </div>
            </div>

            {/* Intro Block */}
            <div className="intro">
                <Divider style={{ marginBottom: '20px' }} />
                <p><strong>As your exclusive wedding partners</strong>, we craft timeless celebrations across the most romantic landscapes of Italy — where every detail becomes a cherished memory.</p>
                <Divider style={{ marginTop: '20px' }} />
            </div>

            {/* Stats */}
            <div className="home-stats">
                <div className="hstat"><div className="hstat-n">20+</div><div className="hstat-l">Years of Excellence</div></div>
                <div className="hstat"><div class="hstat-n">840</div><div className="hstat-l">Weddings Crafted</div></div>
                <div className="hstat"><div className="hstat-n">14</div><div className="hstat-l">Italian Locations</div></div>
                <div className="hstat"><div className="hstat-n">98%</div><div className="hstat-l">Client Satisfaction</div></div>
            </div>

            {/* Feature Block */}
            <div className="home-feat">
                <div className="hf-img">
                    {/* Pure CSS/SVG Image Placeholder from your HTML */}
                    <div style={{ textAlign: 'center', opacity: 0.5 }}>
                        <h3 style={{ color: '#C8A84B', fontFamily: 'Playfair Display' }}>Villa Balbianello</h3>
                    </div>
                </div>
                <div className="hf-txt">
                    <div className="sey">Our Story</div>
                    <h2>Where every moment becomes a masterpiece</h2>
                    <Divider style={{ justifyContent: 'flex-start', margin: '16px 0' }} />
                    <p>Nestled between the serene waters of Lake Como and the timeless elegance of northern Italy, Arcadia Events has been orchestrating extraordinary celebrations since 2004.</p>
                    <Link to="/about" style={{ color: '#C8A84B', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>Read our full story →</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;