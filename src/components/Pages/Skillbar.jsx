import React from "react";

const Skillbar = () => {
  return (
    <div className="container">
      <h2 className="text-center">My Skills</h2>
      <br />
      <div className="grid">
        <div className="col1">
          <div className="items">
            <div className="heading">
              <span>Html</span>
              <span className="percentage">80%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="items">
            <div className="heading">
              <span> CSS</span>
              <span className="percentage">85%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="items">
            <div className="heading">
              <span>Javascript</span>
              <span className="percentage">80%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="items">
            <div className="heading">
              <span>Jquery</span>
              <span className="percentage">75%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="items">
            <div className="heading">
              <span>React Js</span>
              <span className="percentage">85%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="items">
            <div className="heading">
              <span>Node Js</span>
              <span className="percentage">80%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="items">
            <div className="heading">
              <span>Express Js</span>
              <span className="percentage">75%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="items">
            <div className="heading">
              <span>Mongo Db</span>
              <span className="percentage">80%</span>
            </div>
            <div className="progress skill-bar">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
