import React, { useState } from 'react';
import './ApplyPage.css';
import Stats from "../components/Stats"

const MiniCalendar = ({ month, year, highlightedDates }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="mini-calendar">
      <h3>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h3>
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

  return (
    <div className="apply-page">
      <div className="main-content">
        <div className="drone-images">
          <img src="/path-to-drone-outline.png" alt="Drone Outline" className="drone-outline" />
          <img src="/path-to-red-drone.png" alt="Red Drone" className="red-drone" />
        </div>

        <h1 className="apply-to">APPLY TO...</h1>
        <h1 className="cuad">CUAD</h1>

        <h2>INFORMATION SESSIONS</h2>

        <div className="info-section">
          <div className="calendar-container">
            <button onClick={toggleMonth} className="month-toggle">
              {currentMonth === 7 ? 'View September' : 'View August'}
            </button>
            <MiniCalendar
              month={currentMonth}
              year={2024}
              highlightedDates={currentMonth === 7 ? [19, 30] : []}
            />
          </div>

          <div className="session-info">
            <div className="session">
              <Stats stats={[
                { value: '01', label: 'Info Session' }
              ]} align="left" text="kms" />
              <h4>WARREN HALL</h4>
              <p>AUGUST 30TH, 2024</p>
              <p>5:30 PM - 6:30 PM</p>
            </div>
            <div className="session">
              <Stats stats={[
                { value: '02', label: 'Info Session' },
              ]} align="left" text="kms" />
              <h4>WARREN HALL</h4>
              <p>AUGUST 30TH, 2024</p>
              <p>5:30 PM - 6:30 PM</p>
            </div>
          </div>
        </div>

        <h2>APPLICATION</h2>
        <p className="application-text">
          We are looking for a diverse range of students here at CUAD! We look forward to reading
          your applications and getting to know you further!
        </p>
        <button className="apply-button">Apply Now!</button>
      </div>

      <img src="/path-to-grid-image.png" alt="Grid Background" className="grid-background" />
    </div>
  );
};

export default ApplyPage;