import React from 'react';
import '../../styles/ui/ImageBanner.css';

const ImageBanner = ({ image, caption }) => {
    return (
        <div
            className="image-banner"
            style={{ backgroundImage: `url(${image})` }}
        >
            {caption && (
                <div className="image-banner-caption">
                    {caption}
                </div>
            )}
        </div>
    );
};

export default ImageBanner;
