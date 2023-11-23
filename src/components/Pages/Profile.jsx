import React from "react";

const Profile = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nikhil Renjith</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Aspiring Full Stack Developer, Recent graduate passionate about
            building innovative web applications. Proficient in React.js,
            Node.js, and MongoDB. Check out my projects on GitHub and let's
            build something amazing together!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </section>
  );
};

export default Profile;
