import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <artcle className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                {" "}
                Managing UI using HTML, CSS, JavaScript, Bootsrap and React.Js.
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                {" "}
                Creating reusable components to optimize code and speed of web
                app.
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                {" "}
                Edited existing codes to improve browser compatibility and
                mobile Responsiveness.
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                {" "}
                Worked with Backend developerto edit existing projects on
                certain client Websites.
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                {" "}
                Software and frameworks used are React, NodeJS, ExpressJs,
                MongoDB, Git etc.
              </p>
            </li>
          </ul>
        </artcle>
      </div>
    </section>
  );
};

export default Services;
