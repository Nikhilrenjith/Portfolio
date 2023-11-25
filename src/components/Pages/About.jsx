import React from "react";
import Skillbar from "./Skillbar";
const About = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            An enthusiastic Fullstack Developer with a strong foundation in
            frontend and backend development. With a degree in computer science,
            I've successfully worked on a variety of projects and demonstrated
            my expertise with a variety of technologies, including HTML, CSS,
            JavaScript, React, Node.js, Express, and MongoDB. My interest is
            using code to solve complex issues and create seamless user
            experiences. I'm skilled at translating ideas into scalable apps.
          </p>
          <p className="hero--section-description">
            I enjoy working in the fast-paced world of technology and am always
            looking to experiment with new tools and trends. Please look through
            my portfolio to see examples of my work that demonstrates my
            dedication to quality. Making connections with experts that share my
            interests and looking into joint venture options excites me. You may
            send me an email or add me on LinkedIn. I appreciate you coming, and
            I'm looking forward to talking with you
          </p>
        </div>
      </div>
      <div>
        <Skillbar />
      </div>
    </section>
  );
};

export default About;
