import React from 'react';
import SectionHeading from './SectionHeading';
import '../../styles/ui/Hero.css';

const Hero = ({ eyebrow, title, subtitle, dark = true, children }) => {
    return (
        <div className="page-hero">
            <div className="page-hero-content">
                <SectionHeading
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    dark={dark}
                />
                
                {/* Agar hero section mein koi button waghera dena ho (jese Home page pe hai) */}
                {children && (
                    <div className="page-hero-actions">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
