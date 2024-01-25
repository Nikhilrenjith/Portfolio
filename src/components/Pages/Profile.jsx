import React from "react";
import { useTypewriter } from 'react-simple-typewriter'
const Profile = () => {
  const mail = () => {
    const email = "mailto:nikhilrenjith3@gmail.com";
    window.location.href = email;
  };
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer', 'Mern Stack Developer'],
    loop: 0,
    deleteSpeed:100
  })
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title mt-4">Hey, </p>
          <p className="section--title ">I'm Nikhil Renjith</p>
          <div className="typo-div">
          <h1>
          <span className="typo">{text}</span>
          
          </h1>
          </div>
        
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
