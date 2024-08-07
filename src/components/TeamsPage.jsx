import React from 'react';
import './TeamsPage.css';
import ImageCarousel from './ImageCarousel';

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
        description: "The mechanical team is responsible for the overall physical of the drone. This includes designing and building the frame and aerodynamics of the drone. They also work closely together with the electrical team when mounting of the sensor to the drone.",
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    },
    "Electrical": {
        description: "The electrical team is in charge of anything that requires any electronics or low level coding. They deal with power distribution, serial communication, sensors, wiring soldering, computer architecture and radio signals.",
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    },
    "Computer Science": {
        description: "The computer science subteam makes the brains of the drone. They construct and implement the algorithms for object avoidance, path planning, communications, mission protocols and give the drone the awareness it needs to take on the challenges.",
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    },
    "Business": {
        description: "The business team is in charge of any business development, marketing, or outreach for the team. The team is also responsible for all the finances, website development, video editing, and potential business transactions.",
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    }
}

const TeamsPage = () => {
    return <>
        <section className="team-banner">
            <div className='images'><img src="./src/components/images/team-photo.png" /></div>
            <div className="description">
                <h1 id="num4">04</h1>
                <h1 id="subteams">Subteams</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis autem perspiciatis repellendus expedita ad numquam voluptate nihil ab iusto error saepe nobis reiciendis excepturi dicta possimus ipsum, ut incidunt ratione.</p>
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