import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/ui/Hero';
import '../styles/Data.css';

const Data = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch data.');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="data-loading">Loading guest list...</div>;
    if (error) return <div className="data-error">{error}</div>;

    return (
        <div className="data-page full-width">

            <div className="data-container">
                <Hero
                    title="Guest Registry"
                    subtitle="VIP Attendees & Contacts"
                />

                <div className="data-list-container">
                    <div className="data-grid-row data-grid-header">
                        <div>ID</div>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Company</div>
                        <div style={{ textAlign: 'right' }}>Status</div>
                    </div>

                    {users.map((user) => (
                        <div key={user.id} className="data-grid-row data-grid-item">
                            <div className="data-cell">{user.id}</div>
                            <div className="data-cell">{user.name}</div>
                            <div className="data-cell">{user.email}</div>
                            <div className="data-cell">{user.company.name}</div>
                            <div className="data-cell" style={{ textAlign: 'right' }}>
                                <span className="data-badge">VIP</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Data;