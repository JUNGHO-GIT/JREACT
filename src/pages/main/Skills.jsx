import React, {useState, useEffect} from "react";
import {CSSTransition} from "react-transition-group";
import CountUp from "react-countup";
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
            titleColor: {color: "#dc3545"},
            titleValue: "  Front  ",
            props: [
              {propIcon: "SiHtml5", propValue: "HTML5", propPercent: 85},
              {propIcon: "SiJavascript", propValue: "JavaScript", propPercent: 85},
              {propIcon: "SiTypescript", propValue: "TypeScript", propPercent: 85},
              {propIcon: "SiReact", propValue: "React", propPercent: 70},
              {propIcon: "FaNodeJs", propValue: "Node.js", propPercent: 70},
              {propIcon: "SiCss3", propValue: "CSS3", propPercent: 80},
              {propIcon: "SiBootstrap", propValue: "Bootstrap", propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-file-earmark-code-fill",
            titleColor: {color: "#007bff"},
            titleValue: "  Back  ",
            props: [
              {propIcon: "FaJava", propValue: "Java8", propPercent: 85},
              {propIcon: "FaJava", propValue: "Java11", propPercent: 85},
              {propIcon: "FaJava", propValue: "Java17", propPercent: 80},
              {propIcon: "SiSpring", propValue: "Spring", propPercent: 70},
              {propIcon: "SiSpringboot", propValue: "Boot", propPercent: 70},
              {propIcon: "SiThymeleaf", propValue: "Thymeleaf", propPercent: 80},
              {propIcon: "BsFiletypeJava", propValue: "Jsp", propPercent: 80},
            ],
          },
        ],
      },
      {
        rowNumber: 2,
        rowValue: [
          {
            titleIcon: "bi bi-database-fill-add",
            titleColor: {color: "#28a745"},
            titleValue: "  DB  ",
            props: [
              {propIcon: "TbBrandMysql", propValue: "MySQL", propPercent: 85},
              {propIcon: "SiMariadb", propValue: "MariaDB", propPercent: 80},
              {propIcon: "SiOracle", propValue: "Oracle", propPercent: 70},
              {propIcon: "SiBower", propValue: "Mybatis", propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-hammer",
            titleColor: {color: "#ffc107"},
            titleValue: "  Build  ",
            props: [
              {propIcon: "SiApachemaven", propValue: "Maven", propPercent: 85},
              {propIcon: "FaNpm", propValue: "NPM", propPercent: 80},
              {propIcon: "SiGradle", propValue: "Gradle", propPercent: 70},
            ],
          },
        ],
      },
      {
        rowNumber: 3,
        rowValue: [
          {
            titleIcon: "bi bi-hdd-rack-fill",
            titleColor: {color: "#1b1464"},
            titleValue: "  Server  ",
            props: [
              {propIcon: "SiApache", propValue: "Apache", propPercent: 75},
              {propIcon: "SiApachetomcat", propValue: "Tomcat", propPercent: 75},
            ],
          },
          {
            titleIcon: "bi bi-cloud-check-fill",
            titleColor: {color: "#17a2b8"},
            titleValue: "  Cloud  ",
            props: [
              {propIcon: "FcGoogle", propValue: "Google", propPercent: 75},
              {propIcon: "SiGithub", propValue: "Git", propPercent: 75},
            ],
          },
        ],
      },
      {
        rowNumber: 4,
        rowValue: [
          {
            titleIcon: "bi bi-gear-fill",
            titleColor: {color: "#6c757d"},
            titleValue: "  Data  ",
            props: [
              {propIcon: "BsFiletypeXml", propValue: "XML", propPercent: 85},
              {propIcon: "SiJson", propValue: "JSON", propPercent: 85},
            ],
          },
          {
            titleIcon: "bi bi-terminal-fill",
            titleColor: {color: "#343a40"},
            titleValue: "  System  ",
            props: [
              {propIcon: "SiWindows", propValue: "Windows", propPercent: 85},
              {propIcon: "FcLinux", propValue: "Linux", propPercent: 85},
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
    <section id="skills" className="skills  section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{Items.title}</h2>
        </div>
        {Items.skills.map((section, sectionIndex) => (
          <div key={sectionIndex} className="row skills-content d-flex justify-content-center">
            {section.rowValue.map((skillSection, skillSectionIndex) => (
              <div key={skillSectionIndex} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6" data-aos="fade-up" onClick={() => handleClick(section.rowNumber)}>
                <h3 className="skills-title text-hover glowing-text">
                  <i className={skillSection.titleIcon} style={skillSection.titleColor}></i>
                  {skillSection.titleValue}&nbsp;&nbsp;
                  <img src="/tab.png" alt="tab" width="25px" height="25px" />
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
                          <div className="progress-bar" role="progressbar"
                            aria-valuemin="0" aria-valuemax="100"
                            aria-valuenow={activeSection === section.rowNumber ? prop.propPercent : 0}
                            style={{ width: `${activeSection === section.rowNumber ? progressWidths[propIndex] || 0 : 0}%`, transition: activeSection === section.rowNumber ? "width 1s" : "",
                            }}>
                          </div>
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
