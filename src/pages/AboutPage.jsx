import React from 'react';
import './AboutPage.css';
import Stats from "../components/Stats"
import PageHeader from '../components/PageHeader'

const AboutPage = () => {
  return (
    <section id="about" className="about">
      <PageHeader 
        title="Building the Future of Flight at Cornell."
        subtitle="Cornell University Autonomous Drone is an interdisciplinary student-run project team that designs, builds, and operates aerial robotics."
        backgroundImage="images/AboutPageDrone.webp"
      />
      <div className="support-cuad">
        <a
          className="support-cuad-button"
          href="https://crowdfunding.cornell.edu/project/50955"
          target="_blank"
          rel="noreferrer"
        >
          Support CUAD
        </a>
      </div>
      <main className="about-section">
        <section className="about-intro" aria-labelledby="about-heading">
          <div className="section-heading">
            <span>01</span>
            <h2 id="about-heading">About Us</h2>
          </div>
          <p className="about-lead">Founded as a club in 2017, CU AutoDrone became one of Cornell’s newest project teams in 2023.</p>
          <p>We are a team focused on building both controlled and autonomous drones to push the envelope of UAV technology. Every year, we take on a new real-world engineering challenge in our dedicated lab space in the HVL.</p>
        </section>

        <aside className="about-stats" aria-label="CUAD at a glance">
          <Stats stats={[
            { value: '04', label: 'Subteams' },
            { value: '47', label: 'Members' },
          ]} align="left" text="kms" />
          <div className="teams" aria-label="CUAD subteams">
            <span>Mechanical</span>
            <span>Electrical</span>
            <span>Computer Science</span>
            <span>Business</span>
          </div>
        </aside>

        <section className="about-community" aria-labelledby="community-heading">
          <div className="section-heading">
            <span>02</span>
            <h2 id="community-heading">Community</h2>
          </div>
          <p>Our 47-member-strong community spread across 4 subteams meets regularly to tackle problems, generate ideas, and support each other in a community of innovation. We are not only a team of engineers, but also a group of friends working towards one common goal.</p>
        </section>

        <section className="about-objective" aria-labelledby="objective-heading">
          <div className="section-heading">
            <span>03</span>
            <h2 id="objective-heading">Objective</h2>
          </div>
          <p>CUAD takes on extreme, real-world challenges. This year, we are developing multiple high-performance drones, including a missile-style autonomous glider designed to be released from our large carrier drone, deploy its wings, and operate as a surveillance platform.</p>
          <p>We are also creating a gesture-controlled drone that responds to user movements, and upgrading our unique drone, Buttery, to autonomously navigate an obstacle course and retrieve objects with a retractable grabber. Our objective is to complete the International Aerial Robotics Competition, while pushing the limits with ultra-fast drones and rare, innovative designs.</p>
        </section>
      </main>
    </section>
  );
};

export default AboutPage;
