import React from 'react';
import './TeamsPage.css';
import ImageCarousel from '../components/ImageCarousel';

const Team = ({ title, description, date, images }) => {
    return (
        <section className="team-section">
            <div className='team-images'><ImageCarousel images={images} /></div>
            <div className="description">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}

const teams = {
    "Mechanical": {
        description: "Making use of our in-house 3D printing and CNC capabilities, the mechanical team designs and manufactures the frames and payloads for our drones. Demanding extreme strength, low weight, and optimized aerodynamics, they fuse mechanical intuition with use of analysis software.",
        images: ['./images/meche0.webp', './images/meche.webp', './images/meche1.webp']
    },
    "Electrical": {
        description: "Electrical systems get our drones into the air, and provide the senses that keep them there. The electrical team designs our complex power and data systems, creates high performance wire harnesses, and programs our mechatronic hardware.",
        images: ['./images/ece.webp']
    },
    "Computer Science": {
        description: "Usually our drones are partially or fully autonomous. The computer science subteam makes that possible. They construct and implement the algorithms for path planning and communications, build, train and test the computer vision models for object detection and avoidance, and give the drone the awareness it needs to take on our challenges.",
        images: ['./images/cs1.webp', './images/cs.webp']
    },
    "Business": {
        description: "Extreme engineering comes with extreme cost. The business team is in charge of any business development, marketing, or outreach for the team. The team is also responsible for all the finances, website development, media, video editing, and component procurement.",
        images: ['./images/sponsor-front.webp', './images/business1.webp', './images/business.webp']
    }
}

const TeamsPage = () => {
    return <>
        <section className="team-banner">
            <div className='images'><img src="./images/team-photo.webp" /></div>
            <div className="description">
                <h1 id="num4">04</h1>
                <h1 id="subteams">Subteams</h1>
                <p>CUAD is made up of 4 subteams that work closely to integrate our extreme UAVs. Each team meets individually during the week to complete tasks and the whole team works together on integration at the HVL.</p>
            </div>
        </section>
        <ul className='team-list'>
            {Object.entries(teams).map(([title, values]) => {
                return (
                    <Team
                        key={title}
                        title={title}
                        description={values.description}
                        images={values.images}
                    />)
            })}
        </ul>
    </>
}

export default TeamsPage