import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container" id="skills-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Skills</span>
          </h1>
          <p>
            "Strong intuitions come with strong applied knowledge." This is my
            life motto. I am a disciplined and time bound person. I love to work
            out everything will full dedication and focus. I simply love to keep
            myself occupied and always plan out my work schedule one day prior.
            I am a Web Devlopment and Blockchain Enthusiast and have been
            fascinated with its core concepts, practical applications and the
            immense scope of solving complex real world problems easily.
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Front End Development</h3>
              <p>
                <br />
                <ul style={{ paddingLeft: "10px" }}>
                  <li>
                    HTML,CSS,JAVASCRIPT and developing mobile responsive web
                    applications
                  </li>
                  <li>Bootstrap and tailwind CSS frameworks</li>
                  <li>
                    React JS library and state management library like redux
                  </li>
                  <li> Built some projects on react JS </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Backend Development</h3>
              <p>
                <br />
                <ul style={{ paddingLeft: "10px" }}>
                  <li>Node JS and it's libraries</li>
                  <li>Database like sql,mongo DB</li>
                  <li>Problem Solving</li>
                  <li>Built some projects on full stackweb development </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Programming in Java and Python</h3>
              <p>
                <br />
                <ul style={{ paddingLeft: "10px" }}>
                  <li>Object Oriented Programming using Java</li>
                  <li>
                    Have Knowledge in python libraries like numpy,pandas ....
                    for data analysis
                  </li>
                  <li>
                    Having Basic knowledge in machine learning concepts and
                    other
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
