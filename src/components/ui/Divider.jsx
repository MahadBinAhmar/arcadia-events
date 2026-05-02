import React from 'react';
import '../../styles/ui/Divider.css';

const Divider = ({ dark, className = '' }) => {

    let lineColorClass = "divider-line-light";

    if (dark === true) {
        lineColorClass = "divider-line-dark";
    }

    return (
        <div className={`divider ${className}`}>
            <div className={`divider-line ${lineColorClass}`}></div>
            <div className="divider-diamond"></div>
            <div className={`divider-line ${lineColorClass}`}></div>
        </div>
    );
};

export default Divider;