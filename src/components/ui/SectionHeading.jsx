import React from 'react';
import Divider from './Divider';
import '../../styles/ui/SectionHeading.css';

// SectionHeading — reusable heading block with eyebrow, title, divider, subtitle
// Props:
//   eyebrow  = small text upar (e.g. "Our Story")
//   title    = main heading
//   subtitle = chhoti description neeche
//   align    = 'center' ya 'left' (default: 'center')
//   dark     = true ho toh light colors (dark background ke liye)

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '', dark = false }) => {
    return (
        <div className={`section-heading align-${align} ${className}`}>

            {/* Small eyebrow text — sirf tab dikhao jab prop diya ho */}
            {eyebrow && (
                <p className={`text-eyebrow ${dark ? 'text-eyebrow-light' : ''}`}>
                    {eyebrow}
                </p>
            )}

            {/* Main title */}
            <h2 className={`heading-playfair section-title ${dark ? 'text-light' : ''}`}>
                {title}
            </h2>

            {/* Gold divider line with diamond */}
            <Divider dark={dark} className="section-divider" />

            {/* Optional subtitle — sirf tab dikhao jab prop diya ho */}
            {subtitle && (
                <p className={`section-subtitle ${dark ? 'text-light-muted' : 'text-muted'}`}>
                    {subtitle}
                </p>
            )}

        </div>
    );
};

export default SectionHeading;