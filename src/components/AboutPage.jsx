import React from 'react';
import './AboutPage.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <section id="about" className="about">
      <Header />
      <div className="overall-flex">
        <img className="bg" src="src/components/images/AboutPageDrone.png" alt="Drone" />
        <div className="cuad-container">
          <img className="cuad" src="src/components/images/CUAD.svg" alt="CUAD" />
          <p className="cuad-text">An interdisciplinary student-run project team @ Cornell University that designs, builds, and operates aerial robotics.</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="content about-us">
            <h2>ABOUT US</h2>
            <p>Founded in 2017, we are a team focused on building both controlled and autonomous drones to compete in the International Aerial Robotics Competition. The primary purpose of the IARC is to move the state-of-the-art in aerial robotics forward through the creation of significant and useful mission challenges that are considered 'impossible' at the time that they are proposed. Through competing in these competitions students gain real life experience for future success in industry.</p>
          </div>
        </div>
        <div className="timeline-flex">
          <div className="timeline">
            <div className="stats-container">
              <div className="container">
                <div className="content">
                  <h1>30</h1>
                  <p>MEMBERS</p>
                  <p>Mechanical<br />Electrical<br />Computer Science<br />Business</p>
                </div>
              </div>
              <div className="container">
                <div className="content">
                  <h1>04</h1>
                  <p>SUBTEAMS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="content">
              <h2>COMMUNITY</h2>
              <p>Our 30 members making up 4 subteams come together during regular meetings to engage in a community of innovation. We are not only a team of engineers, but also a group of friends working towards one common goal of competing in the IARC competition.</p>
            </div>
            <div className="content">
              <h2>COMPETITION</h2>
              <p>The Mission 9 challenge has been completed. As a result, we will now redirect our attention towards Mission 10. More information regarding Mission 10 is expected to be revealed later this year.</p>
              <p>For more information, check out their website: <a href="http://www.aerialroboticscompetition.org">International Aerial Robotics Competition</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
