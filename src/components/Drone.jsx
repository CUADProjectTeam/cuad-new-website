import React from 'react';
import './Drone.css';
import ImageCarousel from './ImageCarousel';
import Stats from './Stats'

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
                    <Stats stats={stats} align="center" />

                </div>
            </div>
        </section>
    );
};

export const DeadDrone = ({ title, description, date, images }) => {
    return (
        <section className="graveyard-section">
            <div className='images'><ImageCarousel images={images} /></div>
            <div className="description">
                <h1>{title}</h1>
                <h2>{date}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default Drone;
