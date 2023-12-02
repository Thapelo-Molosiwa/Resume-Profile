import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="SelfIntro">
          <img
            src="../components/images/1a. 361A5176.jpg"
            alt="My Image"
          />
          <h1 className="nameTag">I.T Molosiwa</h1>
          <h2 className="myTitle">Software Developer</h2>

          <p>
            Hello! I'm Thapelo, a passionate and driven individual with a love
            for Software Development.
            <br /> With a background in Software development from CodeSpace
            Academy,
            <br /> I bring knowledge in building responsive websites to the
            table.
            <br /> I'm excited to learn and grow with your company.
            <br /> Let's connect and explore how we can collaborate and achieve
            great things together!
          </p>
        </div>

        <div className="intro">
          <h2>I am Full-Stack Software Developer</h2>
          <hr />
          <p>
            My main experties are HTML,CSS and JavaScript with some frameworks
            and libraries. I specialize in building dynamic web applications,
            both on the front-end and back-end. My passion lies in creating
            efficient, user-friendly software that meets and exceeds client
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
