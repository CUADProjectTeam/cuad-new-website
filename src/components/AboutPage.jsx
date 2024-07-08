import React from 'react';
import './AboutPage.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>Founded in 2017, we are a team focused on building both controlled and autonomous drones to compete in the International Aerial Robotics Competition...</p>
      <div className="stats">
        <div className="stat">
          <h3>30</h3>
          <p>Members</p>
        </div>
        <div className="stat">
          <h3>04</h3>
          <p>Subteams</p>
        </div>
        <div className="subteams">
          <p>Mechanical</p>
          <p>Electrical</p>
          <p>Computer Science</p>
          <p>Business</p>
        </div>
      </div>
    </section>
  );
};

export default About;
