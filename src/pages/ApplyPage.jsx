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

const info_dates = {
  0: [25, 29], // January (0-indexed) with two info sessions
  // If you want no red dots while TBD, use: 0: []
};

const ApplyPage = () => {
  const [currentMonth, setCurrentMonth] = useState(0); // January is 0 (0-indexed)

  const header = [
    () => { setCurrentMonth(currentMonth - 1) },
    "hidden", // No previous month (January is the only month shown)
    () => { setCurrentMonth(currentMonth + 1) },
    "hidden", // No next month (January is the only month shown)
  ];

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
            This semester, CUAD’s Electrical, Mechanical, Software, and Business subteams are recruiting new members. This Fall 2025 application is open to all interested students, with a deadline of Thursday, September 4 at 11:59 PM for upperclassmen, and Thursday, October 16 for freshmen and transfer students. For more information about our project team, please visit our website.
          </p>
          <div>
            <a href='https://forms.gle/gucgFCEnsx8hwmjM7' target="_blank" rel="noreferrer">
              <button className='apply-button'>Apply Now</button>
            </a>
          </div>
        </div>

        <h2>MAILING LIST</h2>
        <p>
          Sign up to <a className='link' href='https://forms.gle/pJRqaUFkTLRQc3NY8' target="_blank" rel="noreferrer">our email list</a> for updates on additional info sessions, recruitment deadlines, and coffee chats.
        </p>

        <h2>INFORMATION SESSIONS</h2>

        <div className="info-section">
          <div className="calendar-container">
            <MiniCalendar
              month={currentMonth}
              year={2025}
              highlightedDates={info_dates[currentMonth]}
              header={header}
            />
          </div>

          <div className="session-info">
            <div className="session">
              <div className="stat-item">
                <h1>01</h1>
                {/* <p>Info Session</p> */}
                <p>Info Sessions TBD</p>
              </div>
              <div>
                {/* <h4>HOLLISTER 312</h4>
                <p>JANUARY 23RD, 2025</p>
                <p>7:30 PM - 8:30 PM</p> */}
              </div>
            </div>

            <div className="session">
              <div className="stat-item">
                <h1>02</h1>
                {/* <p>Info Session</p> */}
                <p>Info Sessions TBD</p>
              </div>
              <div>
                {/* <h4>HOLLISTER 320</h4>
                <p>JANUARY 29TH, 2025</p>
                <p>7:00 PM - 8:00 PM</p> */}
              </div>
            </div>
          </div>
        </div>

        <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
      </div>
    </div>
  );
};

export default ApplyPage;
