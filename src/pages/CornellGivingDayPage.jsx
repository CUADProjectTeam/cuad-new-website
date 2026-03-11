import React from 'react';
import './CornellGivingDayPage.css';

const CornellGivingDayPage = () => {
    return (
        <>
            <div className='giving-day-header'>
                <img src="./images/teamwork.png" alt="Cornell Giving Day" />
                <h1>Cornell Giving Day</h1>
            </div>
            <div className='giving-day-body'>
                <div className='giving-day-content'>
                    <img className="cuad" src="images/CUAD.svg" alt="CUAD" />
                    <h2>Support CUAD This Giving Day</h2>
                    <p>March 13th, Cornell's Giving Day, is a university-wide celebration of giving that takes place annually. It's a day when Cornell community members come together to support the causes and organizations that matter most to them.</p>
                    <p>CUAD relies on the generosity of donors like you to continue building cutting-edge autonomous drone technology. Your support directly impacts our ability to:</p>
                    <ul>
                        <li>Design and build advanced UAVs that push the boundaries of aerospace engineering</li>
                        <li>Provide hands-on experience for our 47+ member team across four specialized subteams</li>
                        <li>Access essential materials and equipment, from caqrbon fiber to high-performance motors</li>
                        <li>Compete in international robotics competitions and showcase Cornell's innovation</li>
                    </ul>
                    <p>Whether you're a current student, alumni, or passionate supporter of engineering excellence, your contribution on Cornell Giving Day makes a real difference in our mission to advance autonomous drone technology.</p>
                    <a href="https://givingday.cornell.edu/campaigns/autonomous-drone-cuad-gift" target='_blank' rel="noreferrer">
                        <button className='giving-day-btn'>Donate on Giving Day</button>
                    </a>
                </div>
                <div className='giving-day-image'>
                    <img src="./images/thumbnail.jpeg" alt="CUAD Drone" />
                </div>
            </div>
            <div className='giving-day-highlight'>
                <h2>Why CUAD?</h2>
                <div className='highlight-cards'>
                    <div className='card'>
                        <h3>Innovation</h3>
                        <p>We tackle extreme, real-world engineering challenges that push the limits of UAV technology and inspire the next generation of engineers.</p>
                    </div>
                    <div className='card'>
                        <h3>Community</h3>
                        <p>Our interdisciplinary team brings together talented students from engineering, business, and beyond to collaborate and learn together.</p>
                    </div>
                    <div className='card'>
                        <h3>Impact</h3>
                        <p>Every donation directly supports student-led research and development that contributes to advancements in autonomous systems and robotics.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CornellGivingDayPage;
