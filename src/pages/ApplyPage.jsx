import React from 'react';
import './ApplyPage.css';
// import Stats from "../components/Stats" // Uncomment if you actually use this elsewhere

const ApplyPage = () => {
  const year = 2025; // keep if you reference it elsewhere

  return (
    <div className="apply-page">
      <div className="main-content">
        <div className="drone-images">
          <img src="./images/logo-sketch.webp" alt="Red Drone Logo" className="red-drone" />
          <img src="./images/flippy2.webp" alt="Flippy Drone Outline" className="drone-outline" />
        </div>

        <div className="apply-header">
          <h1 className="apply-to">APPLY TO</h1>
          <img className="cuad" src="images/CUAD.svg" alt="CUAD" />
        </div>

        <div className="application">
          <h2>APPLICATIONS</h2>
          <p className="application-text">
            This semester, CUAD’s Electrical, Mechanical, Software, and Business subteams are recruiting new members.
            The Fall 2025 application is now open to freshmen and transfer students, with a deadline of Thursday, October 16. For more information
            about our project team, please visit our website.
          </p>
          <div>
            <a href='https://forms.gle/v981DSWNW8nJ3C2P6' target="_blank" rel="noreferrer">
              <button className='apply-button'>Apply Now</button>
            </a>
          </div>
        </div>

        <h2>MAILING LIST</h2>
        <p>
          Sign up to <a className='link' href='https://forms.gle/pJRqaUFkTLRQc3NY8' target="_blank" rel="noreferrer">our email list</a> for updates on spring info sessions, recruitment deadlines, and coffee chats.
        </p>

        {/* Coffee Chat section */}
        <div className="coffee-chat">
          <div className="coffee-chat__text">
            <h2>COFFEE CHATS</h2>
            <p>
              Want to learn more one-on-one about CUAD, roles, or what it’s like on the team?
              Book a quick coffee chat with a team member using the link.
            </p>
          </div>
          <div className="coffee-chat__action">
            <a
              href="https://calendar.app.google/KzHDs7gz72CmhY5H6"
              target="_blank"
              rel="noreferrer"
              aria-label="Book a Coffee Chat"
            >
              <button className="apply-button">Book a Coffee Chat</button>
            </a>
          </div>
        </div>

        {/* Info Sessions Notice */}
        <div className="info-notice">
          <h2>INFORMATION SESSIONS</h2>
          <p className="muted">
            We are done hosting our info sessions this fall. Info sessions will resume in the spring.
          </p>
        </div>

        <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
      </div>
    </div>
  );
};

export default ApplyPage;
