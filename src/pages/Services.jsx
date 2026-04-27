import React from 'react';
import Divider from '../components/Divider';

const Services = () => {
    return (
        <div className="w">
            <div className="svc-hero">
                <div className="sey">Our Offerings</div>
                <h1>Services & Locations</h1>
                <Divider style={{ marginTop: '14px' }} dark={true} />
            </div>

            <div className="svc-grid">
                <div className="svc-card"><div className="svc-card-img sci1"><span className="svc-card-lbl">Ceremony Design</span></div><div className="svc-card-body"><h3>Ceremony Design</h3><p>Bespoke altar arrangements, floral archways, and aisle styling.</p><div className="svc-link"><div className="svc-link-l"></div>Explore service</div></div></div>
                <div className="svc-card"><div className="svc-card-img sci2"><span className="svc-card-lbl">Villa Balbianello</span></div><div className="svc-card-body"><h3>Villa Balbianello</h3><p>The iconic Como peninsula villa, draped in wisteria.</p><div className="svc-link"><div className="svc-link-l"></div>View location</div></div></div>
                <div className="svc-card"><div className="svc-card-img sci3"><span className="svc-card-lbl">Fine Dining</span></div><div className="svc-card-body"><h3>Dining Curation</h3><p>Michelin-starred menus and hand-selected wines.</p><div className="svc-link"><div className="svc-link-l"></div>Discover more</div></div></div>
            </div>

            <div className="svc-spot">
                <div className="svc-spot-img">
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: '#C8A84B', fontFamily: 'Playfair Display', opacity: 0.5 }}>Terrace at sunset</h3>
                    </div>
                </div>
                <div className="svc-spot-txt">
                    <div className="sey">Featured Venue</div>
                    <h2>Villa Carlotta —<br /><em style={{ fontFamily: '"Playfair Display", serif' }}>the jewel of Como</em></h2>
                    <p>Commanding views of the Alps, terraced gardens descending to the water's edge, and interiors that whisper centuries of Italian opulence.</p>
                    <button className="hcta" style={{ marginTop: '12px' }}>Request availability</button>
                </div>
            </div>

            <div className="sh" style={{ paddingBottom: '16px' }}>
                <div className="sey">Packages</div>
                <div className="st">Choose your experience</div>
                <Divider style={{ marginTop: '14px' }} />
            </div>

            <div className="pkg-row">
                <div className="pkg">
                    <div className="pkg-badge">Essentials</div>
                    <h3>Classico</h3>
                    <div className="pkg-price">€8,500<small> / event</small></div>
                    <ul><li><div className="pkg-dot"></div>Venue liaison & booking</li><li><div className="pkg-dot"></div>Day-of coordination</li></ul>
                </div>
                <div className="pkg featured">
                    <div className="pkg-badge">Most Popular</div>
                    <h3>Lusso</h3>
                    <div className="pkg-price">€18,000<small> / event</small></div>
                    <ul><li><div className="pkg-dot"></div>Everything in Classico</li><li><div className="pkg-dot"></div>Full floral design</li></ul>
                </div>
                <div className="pkg">
                    <div className="pkg-badge">Ultimate</div>
                    <h3>Esclusivo</h3>
                    <div className="pkg-price">€32,000<small>+</small></div>
                    <ul><li><div className="pkg-dot"></div>White-glove full service</li><li><div className="pkg-dot"></div>Private villa exclusivity</li></ul>
                </div>
            </div>
        </div>
    );
};

export default Services;