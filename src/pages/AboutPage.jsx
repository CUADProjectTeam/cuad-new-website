import React from 'react';
import './AboutPage.css';
import Stats from "../components/Stats"

const AboutPage = () => {
  return (
    <section id="about" className="about">
      <div className="overall-flex">
        <img className="bg" src="images/AboutPageDrone.webp" alt="Drone" />
        <div className="cuad-container">
          <img className="cuad" src="images/CUAD.svg" alt="CUAD" />
          <p className="cuad-text">Cornell University Autonomous Drone (pronounced like quad) is an interdisciplinary student-run project team that designs, builds, and operates aerial robotics.</p>
        </div>
      </div>
      <div className="about-section">
        <div className='dot-lines'>
          <div key={`0-dot`} className='dot'></div>
          <div key={`0-line`} className='line short'></div>

          <div key={`1-dot`} className='dot'></div>
          <div key={`1-line`} className='line short'></div>

          <div key={`2-dot`} className='dot'></div>
          <div key={`2-line`} className='line shorter'></div>

          <div key={`3-dot`} className='dot small'></div>
        </div>
        <div className='about-content'>
          <div className="about-container">
            <div className="content about-us">
              <h2>About Us</h2>
              <p>Founded as a club in 2017, CU AutoDrone became one of Cornell’s newest project teams in 2023. We are a team focused on building both controlled and autonomous drones to push the envelope of UAV technology. Every year, we take on a new real-world engineering challenge in our dedicated lab space in the HVL.</p>
            </div>
          </div>
          <div className="timeline-flex">
            <div className="timeline">
              <div className="container">
                <div className='janky-extra-div'>
                  <Stats stats={[
                    { value: '04', label: 'Subteams' },
                    { value: '40', label: 'Members' },
                  ]} align="left" text="kms" />
                </div>
                <div className='teams'>
                  <p>Mechanical</p>
                  <p>Electrical</p>
                  <p>Computer Science</p>
                  <p>Business</p>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="content">
                <h2>Community</h2>
                <p>Our 40-member-strong community spread across 4 subteams meets regularly to tackle problems, generate ideas, and support each other in a community of innovation. We are not only a team of engineers, but also a group of friends working towards one common goal. Members can be found hard at work building frames, cursing broken electronics, crowding around the flight sim, and inventing bad names for our drones.</p>
              </div>
              <div className="content">
                <h2>Objective</h2>
                <p>Unlike most teams, which specifically participate in a collegiate engineering competition, CUAD seeks out extreme real world challenges. This year, we are pursuing the Guinness world record for quadcopter speed, which currently stands at a blistering 298 mph. Challenging this record will have us pushing the limits of electrical, mechanical, and controls engineering. Additionally, we are enabling our largest drone, Buttery, to autonomously complete an obstacle course and retrieve an object using a retractable grabber.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='graph'>
          <img src='./images/graph.webp' alt='Grid Background' />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
