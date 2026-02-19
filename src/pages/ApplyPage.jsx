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
            We have now finished recruiting for the Spring 2026 season. We will be recruiting again in Fall 2026, so stay tuned for our info sessions and coffee chats!
            <br /><br />
            If you have any questions about the application or roles, please reach out to
            <a className="link" href="mailto:cuautodrone@gmail.com"> cuautodrone@gmail.com</a>.
          </p>

        </div>

        <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
      </div>
    </div>
  );
};

export default ApplyPage;
