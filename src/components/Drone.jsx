import React from 'react';
import './Drone.css';
import ImageCarousel from './ImageCarousel';

const Drone = ({ title, description, stats, images }) => {
    return (
        <section className="dynamic-section">
            <div className='title-centering'>
                <h1>{title}</h1>
            </div>
            <div className="content-container">
                <div className='images'><ImageCarousel images={images} /></div>
                <div className="description">
                    <p>{description}</p>
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h1>{stat.value}</h1>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Drone;
