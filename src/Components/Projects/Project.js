import React from "react";
import "./Projects.css";
const Project = () => {
  return (
    <div className="project-item-container">
      <div className="project-item">
        <div className="project-item-desc">
          <h3>Mern Income Expenses Tracker</h3>
          <a
            href="https://github.com/venkateshreddy2003/mern-income-expenses-tracker-frontend"
            target={"_blank"}
          >
            github
          </a>
          <p>
            <br />
            <ul style={{ paddingLeft: "10px" }}>
              <li>
                HTML,CSS,JAVASCRIPT and developing mobile responsive web
                applications
              </li>
              <li>Bootstrap and tailwind CSS frameworks</li>
              <li>React JS library and state management library like redux</li>
              <li> Built some projects on react JS </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="project-item">
        <div className="project-item-desc">
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
    </div>
  );
};

export default Project;
