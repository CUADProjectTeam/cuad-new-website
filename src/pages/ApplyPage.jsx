import React, { useState } from 'react';
import './ApplyPage.css';
import Stats from "../components/Stats"

const MiniCalendar = ({ month, year, highlightedDates, header }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [prev_fn, prev, next_fn, next] = header;

  return (
    <div className="mini-calendar">
      <div className='calendar-header'>
        <button className={`calendar-button ${prev}`} onClick={prev_fn}>
          &#10094;
        </button>
        <h3>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h3>
        <button className={`calendar-button ${next}`} onClick={next_fn}>
          &#10095;
        </button>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {Array(firstDay).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        {days.map(day => (
          <div key={day} className={`calendar-day ${highlightedDates.includes(day) ? 'highlighted' : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const ApplyPage = () => {
  const [currentMonth, setCurrentMonth] = useState(7); // August is 7 (0-indexed)

  const toggleMonth = () => {
    setCurrentMonth(currentMonth === 7 ? 8 : 7);
  };

  const header = [toggleMonth, currentMonth === 7 ? "hidden" : "", toggleMonth, currentMonth === 7 ? "" : "hidden"]

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
            If you’re looking for hands-on experience, a diverse community of engineers and friends, or just want to work on cool drones, you should apply to CUAD! We look forward to reading
            your applications and getting to know you further.
          </p>
          <p>Please also fill out the <a className="link" href='https://cornell.ca1.qualtrics.com/jfe/form/SV_3dF2fjywuzGG1wi' target="_blank" rel="noreferrer">general project team application</a>, this is required! Freshman applications are due Thursday, Oct 17th. Upperclassman applications are due Thursday, Sep 5th.</p>
          <div>
            <a href='https://forms.gle/hp2PwqD7iHqx36eAA' target="_blank" rel="noreferrer">
              <button className='apply-button'>Freshman Application</button>
            </a>
            <a href='https://forms.gle/Rryf5yoD59ZELBjC8' target="_blank" rel="noreferrer">
              <button className='apply-button'>Upperclassman Application</button>
            </a>
          </div>
        </div>

        <h2>INFORMATION SESSIONS</h2>

        <div className="info-section">
          <div className="calendar-container">
            <MiniCalendar
              month={currentMonth}
              year={2024}
              highlightedDates={currentMonth === 7 ? [27, 28] : [4]}
              header={header}
            />
          </div>

          <div className="session-info">
            <div className="session">
              <div className="stat-item">
                <h1>01</h1>
                <p>Info Session</p>
              </div>
              <div>
                <h4>PHILLIPS 307</h4>
                <p>AUGUST 27TH, 2024</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
            <div className="session">
              <div className="stat-item">
                <h1>02</h1>
                <p>Info Session</p>
              </div>
              <div>
                <h4>ROCKEFELLER 128</h4>
                <p>AUGUST 28TH, 2024</p>
                <p>6:00 PM - 7:00 PM</p>
              </div>
            </div>
            <div className="session">
              <div className="stat-item">
                <h1>03</h1>
                <p>Info Session</p>
              </div>
              <div>
                <h4>HOLLISTER 306</h4>
                <p>SEPTEMBER 4TH, 2024</p>
                <p>7:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <h2>MAILING LIST</h2>
        <p>Sign up to <a className='link' href='https://forms.gle/3UqVSjZbyAddY9rh9' target="_blank" rel="noreferrer">our email list</a> for updates on additional info sessions, recruitment deadlines and coffee chats.</p>
      </div>
      <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
    </div>
  );
};

export default ApplyPage;