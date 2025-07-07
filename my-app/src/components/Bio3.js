// Bio3.js
import React from "react";
import "./Bio3.css";

function Bio3() {
  return (
    <div className="bio-section">
      <h2 className="bio-heading" style={{ color: '#2e7d32' }}>
        BENEFITS OF BIOMETRIC ATTENDANCE
        MACHINE
      </h2>
      <p className="bio-subheading">
        Know Why We Are Leading Biometric Machine Company Nowadays
      </p>

      <div className="bio-cards">
        <div className="bio-card">
          <h3>CENTRALIZED DATA</h3>
          <p>
            With multiple installations across the nation, Biometric Attendance
            machines help to get the centralized data at your head-office with
            ease.
          </p>
        </div>

        <div className="bio-card">
          <h3>REAL TIME DATA</h3>
          <p>
            The Data Push Technology of Biometric Attendance systems from we
            helps to get real time data at your server. Even you can get their
            notification on mails.
          </p>
        </div>

        <div className="bio-card">
          <h3>NO PROXY PUNCHING</h3>
          <p>
            Since Biometric is a physiological feature of any human being, it is
            next to impossible to cheat on any biometric machine for attendance.
          </p>
        </div>

        <div className="bio-card">
          <h3>ERROR FREE PAYROLL CALCULATION</h3>
          <p>
            Time Office Software from Star Link is linked with the Payroll
            Software which processes the salary of every employee with a single
            click of mouse at the end of every month.
          </p>
        </div>

        <div className="bio-card">
          <h3>LOW COSTING</h3>
          <p>
            Implementation of Time Attendance Machines and Biometric Softwares,
            the paper & pen usage is removed which directly reduces the man
            power and costing as well.
          </p>
        </div>

        <div className="bio-card">
          <h3>NO MANIPULATION</h3>
          <p>
            Every record is encrypted and there is no any possibility to
            manipulate the records. You can monitor the employee activity like
            Leaves, Holidays, shifts etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio3;
