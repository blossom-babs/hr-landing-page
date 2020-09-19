import React from "react";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">Who we are</h1>
      <div className="about__divider" />
      <div className="grid">
        <div className="about__description">
          <p className="about__description--text">
            HR Work is an advisory firm with strong competence and experience in
            providing Human Resources Retainership Services to small or medium
            sized organisations. We know that you are busy with deadlines and
            customer demands and this consumes all your available time and as
            your business expands, your employee challenges begin to multiply
            and then problems with hiring, setting and measuring performance,
            policies for direction among others become more evitable.
          </p>
          <div className="flex">
            <div className="about__values">
              <p className="about__values--text">
                Our Mission: To make HR Systems work for Small to Medium sized
                companies.
              </p>
            </div>
          </div>
        </div>
        <div className="about__image">
          <img src="" alt="Office-setting" />
        </div>
      </div>
    </div>
  );
}

export default About;
