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
          <img src="./images/logo-sketch.webp" alt="Red Drone" className="red-drone" />
          <img src="./images/flippy2.webp" alt="Drone Outline" className="drone-outline" />
        </div>

        <div className="apply-header">
          <h1 className="apply-to">APPLY TO</h1>
          <img className="cuad" src="images/CUAD.svg" alt="CUAD" />
        </div>

        <h2>INFORMATION SESSIONS</h2>

        <div className="info-section">
          <div className="calendar-container">
            <MiniCalendar
              month={currentMonth}
              year={2024}
              highlightedDates={currentMonth === 7 ? [19, 30] : []}
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
                <h4>WARREN HALL</h4>
                <p>AUGUST 30TH, 2024</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
            <div className="session">
              <div className="stat-item">
                <h1>02</h1>
                <p>Info Session</p>
              </div>
              <div>
                <h4>WARREN HALL</h4>
                <p>AUGUST 30TH, 2024</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="application">
          <h2>APPLICATION</h2>
          <p className="application-text">
            We are looking for a diverse range of students here at CUAD! We look forward to reading
            your applications and getting to know you further!
          </p>
          <button className="apply-button">Apply Now!</button>
        </div>
      </div>
      <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
    </div>
  );
};

export default ApplyPage;