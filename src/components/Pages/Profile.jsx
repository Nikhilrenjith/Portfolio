import React from "react";

const Profile = () => {
  const mail = () => {
    const email = "mailto:nikhilrenjith3@gmail.com";
    window.location.href = email;
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title mt-4">Hey, </p>
          <p className="section--title ">I'm Nikhil Renjith</p>
          <h1 className="hero--section--title mt-4">Full Stack Developer</h1>
          <p className="hero--section-description mt-8">
            Aspiring Full Stack Developer, Recent graduate passionate about
            building innovative web applications. Proficient in React.js,
            Node.js, and MongoDB. Check out my projects on GitHub and let's
            build something amazing together!
          </p>
        </div>
        <button className="btn btn-primary mt-4" onClick={mail}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Profile;
