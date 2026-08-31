import React from 'react';
import './ApplyPage.css';
import PageHeader from '../components/PageHeader';

const ApplyPage = () => {
  return (
    <div className="apply-page">
      <PageHeader 
        title="Join Our Team"
        subtitle="Help us push the boundaries of autonomous drone technology"
      />

      <main className="apply-content">
        <section className="apply-intro" aria-labelledby="recruiting-heading">
          <p className="section-kicker">Fall 2026 recruitment</p>
          <p>
            We are only recruiting upperclassmen for the Mechanical Subteam. The
            deadline to apply is Thursday, September 3 at 11:59 PM. Freshmen may apply
            to all subteams, with applications due Thursday, October 15 at 11:59 PM.
            Coffee chats will be announced soon.
          </p>
          <div className="apply-actions">
            <a
              className="apply-action apply-action-primary"
              href="https://docs.google.com/forms/d/1BoZJ9aoTkygncROi-5zc4uEzd7hccPrFqwM7_gGtzd4/viewform?edit_requested=true"
              target="_blank"
              rel="noreferrer"
            >
              Apply now <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              className="apply-action apply-action-secondary"
              href="https://cuad.kit.com/c49bad1c50"
              target="_blank"
              rel="noreferrer"
            >
              Join the mailing list <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              className="apply-action apply-action-primary"
              href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3wa2hprdKoB0neS-tR2ZRJWCgMTYLB8DmU_eo="
              target="_blank"
              rel="noreferrer"
            >
              Coffee Chat our leads to learn more! <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </section>

        <section className="sessions-section" aria-labelledby="sessions-heading">
          <div className="sessions-heading">
            <p className="section-kicker">Meet the team</p>
            <h2 id="sessions-heading">Information sessions</h2>

          </div>
          <div className="calendar" aria-label="Fall 2026 information session dates">
            <div className="calendar-month">
              <h3>September <span>2026</span></h3>
              <div className="calendar-dates">
                <div className="calendar-date"><strong>02</strong><span>Klarman Hall G42 at 7 PM</span></div>
                <div className="calendar-date"><strong>10</strong><span>Gates Hall 114 at 7 PM </span></div>
                <div className="calendar-date"><strong>24</strong><span>TBA at 8 PM</span></div>
              </div>
            </div>
            <div className="calendar-month">
              <h3>October <span>2026</span></h3>
              <div className="calendar-dates">
                <div className="calendar-date"><strong>08</strong><span>RPCC 205 at 7 PM</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="apply-contact">
          <p>Questions about applying?</p>
          <a className="link" href="mailto:cuautodrone@gmail.com">cuautodrone@gmail.com</a>
        </section>
      </main>
    </div>
  );
};

export default ApplyPage;
