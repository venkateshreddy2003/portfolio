/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Venkatesh Reddy Picthala</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              2000,
              "Frontend Developer 👨‍💻",
              2000,
              "Backend Developer 👨‍💻",
              2000,
              "React Developer ⚛️",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I am currently pursuing third year BTech in Computer Science and
          Engineering at Vasireddy venkatadri institute of technology, Guntur .
          <br />
          -🔁"Strong intuitions come with strong applied knowledge."
          <br />
          -🗓️Disciplined, Time bound, works out everything will full dedication
          and focus.
          <br />
          -📜Web Development and Blockchain Enthusiast.
          <br />
          -♾️In love with Mathematics and Algorithms.
          <br />
          -💯Constant, consistent learner for life.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <a
            href="https://www.linkedin.com/in/venkatesh-reddy-pitchala-b98b431b1/"
            target={"_blank"}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/venkateshreddy2003" target={"_blank"}>
            <i class="fa fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/venkateshreddy.pitchala.9"
            target={"_blank"}
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="mailto:venkateshreddy2003@outlook.com" target={"_blank"}>
            <i class="fa-sharp fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        {/* <div className="circle-1"></div>
        <div className="circle-2"></div> */}
      </div>
    </div>
  );
};

export default Header;
