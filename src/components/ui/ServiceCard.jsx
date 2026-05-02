import React from 'react';
import '../../styles/ui/ServiceCard.css';

// ServiceCard — ek service ya venue card component
// Props:
//   image       = card ka image import
//   imageLabel  = image ke upar label text (e.g. "Fine Dining")
//   title       = card ka title
//   description = chhoti description
//   actionText  = button ka text (e.g. "Explore service")

const ServiceCard = ({ image, imageLabel, title, description, actionText }) => {
    return (
        <div className="service-card">

            {/* Top: Image with label */}
            <div className="service-card-image-container">
                <img src={image} alt={title} className="service-card-image" />
                <span className="service-card-label">{imageLabel}</span>
            </div>

            {/* Bottom: Text content */}
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-desc">{description}</p>
                <button className="btn">{actionText}</button>
            </div>

        </div>
    );
};

export default ServiceCard;