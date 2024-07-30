import React from 'react';
import './Drone.css';

const Drone = (title, description, stats) => {
    return (
        <section className="dynamic-section">
            <h1>{title}</h1>
            <div className="content-container">
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h1>{stat.value}</h1>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Drone;