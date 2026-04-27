import React from 'react';
import Divider from '../components/Divider';

const About = () => {
    return (
        <div className="w">
            <div className="ab-hero">
                <div className="sey">Our Philosophy</div>
                <h1>Celebrating Love,<br /><em>Crafting Legacy</em></h1>
                <Divider style={{ margin: '14px 0' }} dark={true} />
                <p>Two decades of passion, precision, and poetry — woven into every wedding we have the privilege to orchestrate.</p>
            </div>

            <div className="ab-split">
                <div className="ab-img">
                    <div style={{ textAlign: 'center' }}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="32" stroke="#C8A84B" strokeWidth=".8" opacity=".35" />
                            <path d="M20 48 Q35 28 50 48" stroke="#C8A84B" strokeWidth="1.2" fill="none" opacity=".5" />
                            <path d="M25 42 Q35 32 45 42" stroke="#C8A84B" strokeWidth=".8" fill="none" opacity=".35" />
                            <circle cx="28" cy="30" r="3" fill="#C8A84B" opacity=".35" />
                            <circle cx="42" cy="30" r="3" fill="#C8A84B" opacity=".35" />
                        </svg>
                        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '11px', color: 'rgba(246,240,228,.4)', marginTop: '10px', letterSpacing: '1px' }}>Happy couples, Villa d'Este</div>
                    </div>
                </div>
                <div className="ab-txt">
                    <div className="sey">Who We Are</div>
                    <h2>Born from a passion for<br />Italian romance</h2>
                    <p>Arcadia Events was founded in 2004 by Sofia Conti, an Italian wedding designer with a lifelong devotion to the art of celebration.</p>
                    <p>Our team of twelve dedicated specialists work in perfect harmony to transform each client's vision into a living, breathing masterpiece.</p>
                    <Divider style={{ justifyContent: 'flex-start', margin: '20px 0' }} />
                    <p>We do not simply plan weddings. We author experiences that resonate for generations.</p>
                </div>
            </div>

            <div className="ab-vals">
                <div className="ab-val">
                    <div className="ab-val-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#C8A84B" strokeWidth="1.5"><path d="M12 2L9 9H2L7.5 13.5L5.5 21L12 17L18.5 21L16.5 13.5L22 9H15Z" /></svg></div>
                    <h3>Excellence</h3>
                    <p>Every decision is weighed against our highest standard — yours.</p>
                </div>
                <div className="ab-val" style={{ borderLeft: '1px solid var(--dv)', borderRight: '1px solid var(--dv)' }}>
                    <div className="ab-val-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#C8A84B" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg></div>
                    <h3>Intimacy</h3>
                    <p>We listen deeply before we create, ensuring your essence shapes every detail.</p>
                </div>
                <div className="ab-val">
                    <div className="ab-val-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg></div>
                    <h3>Heritage</h3>
                    <p>Rooted in Italian tradition, elevated by contemporary vision and craft.</p>
                </div>
            </div>

            <div className="ab-quote">
                <Divider style={{ marginBottom: '20px' }} />
                <blockquote>"A wedding is not an event — it is the opening verse of a love story that will be recited for a lifetime."</blockquote>
                <cite>Sofia Conti, Founder & Creative Director</cite>
                <Divider style={{ marginTop: '20px' }} />
            </div>

            <div className="ab-team">
                <div className="ab-tm"><div className="ab-tm-av">SC</div><h4>Sofia Conti</h4><span>Founder & Director</span><p>20 years shaping Italy's finest celebrations with an architect's eye.</p></div>
                <div className="ab-tm"><div className="ab-tm-av">LR</div><h4>Luca Romano</h4><span>Head of Venues</span><p>Curates exclusive lakeside estates and historic Italian properties.</p></div>
                <div className="ab-tm"><div className="ab-tm-av">EF</div><h4>Elena Ferrari</h4><span>Floral Artisan</span><p>Transforms nature into sculptural poetry for every occasion.</p></div>
            </div>
        </div>
    );
};

export default About;