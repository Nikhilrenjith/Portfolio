import React from "react";
import data from "../data/index.json";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import "../../App.css";

const Portfolio = (datas) => {
  const handleClick = () => {
    window.open("https://github.com/Nikhilrenjith", "_blank");
  };
  const links = () => {
    console.log(datas.link);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={handleClick}>
            <GitHubIcon />
            My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="card--button">
                <Link to={item.gitlink} target="_blank">
                  <button className="btn btn-github">
                    {item.desc}
                    <CallMadeIcon />
                  </button>
                </Link>
                <Link to={item.link} target="_blank">
                  <button className="btn btn-github" onClick={links}>
                    <span className="btn-text">Website</span>
                    <LanguageIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
