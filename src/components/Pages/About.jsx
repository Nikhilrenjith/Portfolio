import React, { useState } from "react";
import Skillbar from "./Skillbar";
import resume from "../data/resume.pdf";

const About = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Simulating download delay (replace with actual download logic)
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 2000); // Simulated 2 seconds download time

    // Create a virtual link and trigger a click to download the PDF
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        <button
          onClick={handleDownload}
          className={`download-button h-10  transform ${
            downloading || downloaded
              ? "cursor-not-allowed"
              : "active:scale-90 hover:scale-100"
          } bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-bold tracking-widest`}
          disabled={downloading || downloaded}
        >
          <div className="flex justify-center items-center relative">
            <div className="svg-container">
              {downloading && (
                // Download Icon
                <svg
                  className="download-icon"
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="download-arrow"
                    d="M13 9L9 13M9 13L5 9M9 13V1"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {!downloading && downloaded && (
                // Checked Icon
                <svg
                  className="check-svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                    fill="white"
                  />
                </svg>
              )}
              <div
                className={`download-loader text-white ${
                  downloading ? "" : "hidden"
                }`}
              ></div>
            </div>
            <div className="button-copy pl-2 leading-none uppercase">
              {downloading ? "Downloading..." : "Download"}
            </div>
          </div>
        </button>
      </div>
      <div>
        <Skillbar />
      </div>
    </section>
  );
};

export default About;
