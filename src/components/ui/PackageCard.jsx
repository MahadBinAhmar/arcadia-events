import React from 'react';
import '../../styles/ui/PackageCard.css';

const PackageCard = ({ label, title, price, priceSuffix, features, dark }) => {
    return (
        <div className={`package-card ${dark ? 'package-card-dark' : 'package-card-light'}`}>

            <div className="package-card-label">
                {label}
            </div>

            <h3 className="package-card-title" style={{ color: dark ? 'var(--color-cream)' : 'var(--color-charcoal)' }}>{title}</h3>

            <div className="package-card-price">
                {price}
                <small style={{ color: dark ? 'rgba(246, 240, 228, 0.5)' : 'var(--color-text-muted)' }}>{priceSuffix}</small>
            </div>

            <ul className="package-list">
                {features.map((feature, idx) => (
                    <li key={idx} className="package-item" style={{ borderColor: dark ? 'rgba(200, 168, 75, 0.2)' : 'var(--color-divider)', color: dark ? 'rgba(246, 240, 228, 0.7)' : 'var(--color-text-muted)' }}>
                        <div className="divider-diamond" style={{ flexShrink: 0, width: '4px', height: '4px' }}></div>
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default PackageCard;
