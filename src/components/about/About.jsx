import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="conatiner about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 months Internship </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js
            & Redux And apart from Front-End, I have good knowledge in Back-End
            using NodeJs & MongoDB  and continuously engage in trying to extend
            my skills with new technology.
          </p>

          <a href="#contact " className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default About;
