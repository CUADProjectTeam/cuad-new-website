import React, { useState, useMemo } from 'react';
import './ApplyPage.css';
import Stats from "../components/Stats"

const MiniCalendar = ({ month, year, highlightedDates = [], header }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [prev_fn, prevClass, next_fn, nextClass] = header;

  return (
    <div className="mini-calendar">
      <div className='calendar-header'>
        <button className={`calendar-button ${prevClass}`} onClick={prev_fn} aria-label="Previous month">
          &#10094;
        </button>
        <h3>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h3>
        <button className={`calendar-button ${nextClass}`} onClick={next_fn} aria-label="Next month">
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

// Only allow September (8) and October (9) of 2025
const ALLOWED_MONTHS = [8, 9]; // 0-indexed: Sep, Oct

const info_dates = {
  8: [2, 24],  // September 2025
  9: [9, 13],  // October 2025
};

const sessions = [
  {
    id: "01",
    date: "September 2, 2025",
    room: "HOLLISTER 312",
    time: "6:30 PM - 7:30 PM",
  },
  {
    id: "02",
    date: "September 24, 2025",
    room: "RPCC 222",
    time: "7:00 PM - 8:00 PM",
  },
  {
    id: "03",
    date: "October 9, 2025",
    room: "Hollister 312",
    time: "6:30 PM - 7:30 PM",
  },
  {
    id: "04",
    date: "October 13, 2025",
    room: "Phillips 213",
    time: "6:30 PM - 7:30 PM",
  },
];

const ApplyPage = () => {
  // start on September (8)
  const [currentMonth, setCurrentMonth] = useState(8);
  const year = 2025;

  const atStart = currentMonth === ALLOWED_MONTHS[0];
  const atEnd = currentMonth === ALLOWED_MONTHS[ALLOWED_MONTHS.length - 1];

  const header = useMemo(() => ([
    () => !atStart && setCurrentMonth(m => Math.max(ALLOWED_MONTHS[0], m - 1)),
    atStart ? "hidden" : "",
    () => !atEnd && setCurrentMonth(m => Math.min(ALLOWED_MONTHS[ALLOWED_MONTHS.length - 1], m + 1)),
    atEnd ? "hidden" : "",
  ]), [atStart, atEnd]);

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
          Sign up to <a className='link' href='https://forms.gle/pJRqaUFkTLRQc3NY8' target="_blank" rel="noreferrer">our email list</a> for updates on additional info sessions, recruitment deadlines, and coffee chats.
        </p>

        <h2>INFORMATION SESSIONS</h2>

        <div className="info-section">
          <div className="calendar-container">
            <MiniCalendar
              month={currentMonth}
              year={year}
              highlightedDates={info_dates[currentMonth] || []}
              header={header}
            />
          </div>

          <div className="session-info">
            {sessions.map(s => (
              <div className="session" key={s.id}>
                <div className="stat-item">
                  <h1>{s.id}</h1>
                  <p>{s.date}</p>
                </div>
                <div>
                  <h4>{s.room}</h4>
                  <p>{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img src="./images/graph.webp" alt="Grid Background" className="grid-background" />
      </div>
    </div>
  );
};

export default ApplyPage;
