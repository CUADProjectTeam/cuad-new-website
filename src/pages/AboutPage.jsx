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
                <p>Unlike most teams that focus on collegiate engineering competitions, CUAD takes on extreme, real-world challenges. This year, we are developing multiple high-performance drones, including a missile-style autonomous glider designed to be released from our large carrier drone, deploy its wings, and operate as a surveillance platform. We are also creating a gesture-controlled drone that responds to user movements, and upgrading our unique drone, Buttery, to autonomously navigate an obstacle course and retrieve objects with a retractable grabber. Beyond these projects, we push the limits with ultra-fast drones and rare, innovative designs. At CUAD, the possibilities are endless: every new idea is considered, and as a team, we choose projects that are both exciting and highly challenging.</p>
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
