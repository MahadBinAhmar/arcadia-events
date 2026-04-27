import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '../components/Divider';

const Data = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setBookings(res.data.slice(0, 8)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="w">
            <div className="data-hero">
                <div>
                    <div className="sey" style={{ textAlign: 'left', margin: 0 }}>Live Dashboard</div>
                    <h1>Wedding Bookings</h1>
                    <p>Fetched via Axios · useEffect</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="data-badge">Refresh Data</button>
                </div>
            </div>

            <div className="dtbl-wrap">
                <div className="dtbl-hdr">
                    <span>#</span><span>Couple Name</span><span>Email / Contact</span><span>Location</span><span>Status</span>
                </div>

                {loading ? (
                    <p style={{ padding: '20px', textAlign: 'center' }}>Loading live data...</p>
                ) : (
                    bookings.map((item, index) => (
                        <div className="dtbl-row" key={item.id}>
                            <div className="did">0{index + 1}</div>
                            <div className="dname">{item.name}</div>
                            <div className="ddate">{item.email}</div>
                            <div className="dloc">{item.company.name}</div>
                            <div><span className="dstatus ds-c">Confirmed</span></div>
                        </div>
                    ))
                )}
            </div>

            <div className="sh" style={{ paddingBottom: '16px' }}>
                <div className="sey">Venue Analytics</div>
                <div className="st">Location overview</div>
                <Divider style={{ marginTop: '12px' }} />
            </div>

            <div className="dloc-cards">
                <div className="dlc">
                    <div className="dlc-h"><h4>Villa Carlotta</h4><span className="dlc-badge">Popular</span></div>
                    <div className="dlc-data">
                        <div className="dlc-row"><span>Max Capacity</span><span>250 guests</span></div>
                        <div className="dlc-row"><span>Base Rate</span><span>€12,000/day</span></div>
                    </div>
                </div>
                <div className="dlc">
                    <div className="dlc-h"><h4>Villa Balbianello</h4><span className="dlc-badge">Iconic</span></div>
                    <div className="dlc-data">
                        <div className="dlc-row"><span>Max Capacity</span><span>150 guests</span></div>
                        <div className="dlc-row"><span>Base Rate</span><span>€15,500/day</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;