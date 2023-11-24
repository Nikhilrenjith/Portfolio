import React from "react";

const Skillbar = () => {
  const skillsData = [
    { name: "Html", value: 80 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 55 },
    { name: "Jquery", value: 55 },
    { name: "React Js", value: 75 },
    { name: "Express Js", value: 50 },
    { name: "Node Js", value: 30 },
    { name: "Mongo Db", value: 90 },
  ];

  return (
    <div className="container">
      <div>
        <h3 className="text-center">My Skills</h3>
        <br />

        {/* Skill Bars */}
        {skillsData.map((skill, index) => (
          <div className="items">
            <React.Fragment key={index}>
              <div className="heading">
                <span>{skill.name}</span>
                <span className="percentage">{skill.value}%</span>
              </div>
              <div className="progress skill-bar">
                <div
                  className="progress-bar progress-bar-primary"
                  role="progressbar"
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillbar;
