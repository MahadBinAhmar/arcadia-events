import React from 'react';

const Divider = ({ style, dark }) => {
    return (
        <div className="gdiv" style={style}>
            <div className="gdiv-l" style={dark ? { background: '#F6F0E4', opacity: 0.2 } : {}}></div>
            <div className="gdiv-d"></div>
            <div className="gdiv-l" style={dark ? { background: '#F6F0E4', opacity: 0.2 } : {}}></div>
        </div>
    );
};

export default Divider;