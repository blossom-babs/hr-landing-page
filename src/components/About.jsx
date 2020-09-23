import React from "react";
import ContentBox from "./ContentBox";
import Office from "../assets/desc_img.png";
import SquareButton from "./SquareButton";

function About() {
  return (
    <section className="about">
      <h1 className="about__title sub--headings">Who we are</h1>
      <div className="about__divider sub--divider" />
      <div className="grid">
        <div className="grid-col-one">
          <div className="about__content">
            <p className="about__content--first-p">
              HR Work is an advisory firm with strong competence and experience
              in providing Human Resources Retainership Services to small or
              medium sized organisations.
            </p>
            <p className="about__content--second-p">
              We know that you are busy with deadlines and customer demands and
              this consumes all your available time and as your business
              expands, your employee challenges begin to multiply and then
              problems with hiring, setting and measuring performance, policies
              for direction among others become more evitable.
            </p>
          </div>
          <div className="about__flex">
            <div className="about__flex-col-one">
              <ContentBox
                title="Our Mission:"
                content="
              To make HR Systems work for Small 
              to Medium sized companies.
              "
              />
            </div>
            <div className="about__flex-col-two">
              <ContentBox
                title="Our Vision:"
                content="
              To be the HR retainership firm of choice to thriving businesses
              "
              />
            </div>
          </div>

          <div className="about__image-section">
            <SquareButton content="Discover more" />
          </div>
        </div>
        <div className="grid-col-two">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="about__img"
          >
            <img src={`${Office}`} alt="office-seting" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
