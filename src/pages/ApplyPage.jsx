import React from 'react';
import './ApplyPage.css';

const ApplyPage = () => {
  const year = 2026;

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
            For Spring 2026, CUAD is recruiting new members exclusively for the Business subteam,
            with openings for Web Developers and Graphic Designers only. The Spring 2026 application
            is open to all students, with a deadline of Thursday, January 29.
            <br /><br />
            We will not be hosting mailing lists, coffee chats, or information sessions this cycle.
            If you have any questions about the application or roles, please reach out to
            <a className="link" href="mailto:cuautodrone@gmail.com"> cuautodrone@gmail.com</a>.
          </p>

          <div className="apply-buttons">

            <a
              href="https://forms.gle/MRno8C7B42dQnn4i7"
              target="_blank"
              rel="noreferrer"
            >
              <button className="apply-button">
                Apply Here
              </button>
            </a>
          </div>
        </div>

        <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
      </div>
    </div>
  );
};

export default ApplyPage;
