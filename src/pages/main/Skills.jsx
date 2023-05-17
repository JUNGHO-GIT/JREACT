import React, {useState, useEffect} from "react";
import {CSSTransition} from "react-transition-group";
import CountUp from "react-countup";
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Skills = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [progressWidths, setProgressWidths] = useState([]);
  const Items = {
    title: ["Skills"],

    skills: [
      {
        rowNumber: 1,
        rowValue: [
          {
            titleIcon: "bi bi-badge-hd-fill",
            titleValue: "  Frontend  ",
            props: [
              {propIcon: "SiHtml5", propValue: "HTML5",  propPercent: 100},
              {propIcon: "SiCss3", propValue: "CSS3",  propPercent: 100},
              {propIcon: "SiJavascript", propValue: "JavaScript",  propPercent: 80},
              {propIcon: "SiJquery", propValue: "jQuery",  propPercent: 80},
              {propIcon: "SiReact", propValue: "React",  propPercent: 80},
              {propIcon: "FaNodeJs", propValue: "Node.js",  propPercent: 80},
              {propIcon: "SiBootstrap", propValue: "Bootstrap",  propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-file-earmark-code-fill",
            titleValue: "  Backend  ",
            props: [
              {propIcon: "FaJava", propValue: "Java8",  propPercent: 100},
              {propIcon: "FaJava", propValue: "Java11",  propPercent: 80},
              {propIcon: "FaJava", propValue: "Java17",  propPercent: 80},
              {propIcon: "SiSpring", propValue: "Spring",  propPercent: 80},
              {propIcon: "SiSpringboot", propValue: "Boot",  propPercent: 80},
              {propIcon: "SiThymeleaf", propValue: "Thymeleaf",  propPercent: 80},
              {propIcon: "BsFiletypeJava", propValue: "Jsp",  propPercent: 80},
            ],
          },
        ],
      },
      {
        rowNumber: 2,
        rowValue: [
          {
            titleIcon: "bi bi-database-fill-add",
            titleValue: "  DB  ",
            props: [
              {propIcon: "TbBrandMysql", propValue: "MySQL",  propPercent: 100},
              {propIcon: "SiOracle", propValue: "Oracle",  propPercent: 100},
              {propIcon: "SiMariadb", propValue: "MariaDB",  propPercent: 80},
              {propIcon: "SiBower", propValue: "Mybatis",  propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-hammer",
            titleValue: "  Build  ",
            props: [
              {propIcon: "SiApachemaven", propValue: "Maven",  propPercent: 80},
              {propIcon: "SiGradle", propValue: "Gradle",  propPercent: 80},
              {propIcon: "FaNpm", propValue: "NPM",  propPercent: 80},
            ],
          },
        ],
      },
      {
        rowNumber: 3,
        rowValue: [
          {
            titleIcon: "bi bi-hdd-rack-fill",
            titleValue: "  Server  ",
            props: [
              {propIcon: "SiApache", propValue: "Apache",  propPercent: 80},
              {propIcon: "SiApachetomcat", propValue: "Tomcat",  propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-cloud-check-fill",
            titleValue: "  Cloud  ",
            props: [
              {propIcon: "FcGoogle", propValue: "Google",  propPercent: 80},
              {propIcon: "SiGithub", propValue: "Git",  propPercent: 100},
            ],
          },
        ],
      },
      {
        rowNumber: 4,
        rowValue: [
          {
            titleIcon: "bi bi-gear-fill",
            titleValue: "  Data  ",
            props: [
              {propIcon: "BsFiletypeXml", propValue: "XML",  propPercent: 80},
              {propIcon: "SiJson", propValue: "JSON",  propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-terminal-fill",
            titleValue: "  System  ",
            props: [
              {propIcon: "SiWindows", propValue: "Windows",  propPercent: 80},
              {propIcon: "FcLinux", propValue: "Linux",  propPercent: 80},
            ],
          },
        ],
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  const handleClick = (index) => {
    if (activeSection === index) {
      setActiveSection(-1);
    }
    else {
      setActiveSection(index);
    }
  };

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    if (activeSection !== -1) {
      let activeProps = [];
      Items.skills.forEach((section) => {
        if (section.rowNumber === activeSection) {
          section.rowValue.forEach((skillSection) => {
            skillSection.props.forEach((prop) => {
              activeProps.push(prop);
            });
          });
        }
      });
      const newProgressWidths = activeProps.map((prop) => prop.propPercent);
      setProgressWidths(newProgressWidths);
    }
    else {
      setProgressWidths([]);
    }
  }, [activeSection]);

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{Items.title}</h2>
        </div>
        {Items.skills.map((section, sectionIndex) => (
          <div key={sectionIndex} className="row skills-content">
            {section.rowValue.map((skillSection, skillSectionIndex) => (
              <div key={skillSectionIndex} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6" data-aos="fade-up" onClick={() => handleClick(section.rowNumber)}>
                <h3 className="skills-title text-hover glowing-text">
                  <i className={skillSection.titleIcon}></i>
                  {skillSection.titleValue}
                </h3>
                {skillSection.props.map((prop, propIndex) => (
                  <CSSTransition key={propIndex} in={activeSection === section.rowNumber} timeout={300} classNames="list-transition" unmountOnExit>
                    <div className="list-content">
                      <div className="progress">
                        <span className="skill">
                          <Icons icon={prop.propIcon} />
                          {prop.propValue}
                          <i className="val">{activeSection === section.rowNumber ? <CountUp end={prop.propPercent} duration={1} /> : 0}%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={activeSection === section.rowNumber ? prop.propPercent : 0}
                            style={{
                              width: `${activeSection === section.rowNumber ? progressWidths[propIndex] || 0 : 0}%`,
                              transition: activeSection === section.rowNumber ? "width 1s" : "",
                            }}></div>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
