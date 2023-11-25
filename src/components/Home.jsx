import React from "react";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Rough from "./Pages/Rough";

const Home = () => {
  return (
    <>
      <Profile />
      <Skills />
      <About />
      <Portfolio />
      <Review />
      <Contact />
      <Rough />
      <Footer />
    </>
  );
};

export default Home;
