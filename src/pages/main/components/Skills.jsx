// Skills.jsx

import { React, useState, useEffect } from "../../../import/ImportReacts.jsx";
import { CSSTransition, CountUp } from "../../../import/ImportLibs.jsx";
import { Icons } from "../../../assets/components/Icons";
import { tab } from "../../../import/ImportImages.jsx";

// -------------------------------------------------------------------------------------------------
export const Skills = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [progressWidths, setProgressWidths] = useState([]);
  const Items = {
    title: ["Skills"],
    skills: [

      // -------------------------------------------------------------------------------------------
      {
        rowNumber: 1,
        rowValue: [
          {
            titleIcon: "bi bi-badge-hd-fill",
            titleColor: {color: "#dc3545"},
            titleValue: "  Front  ",
            props: [
              {propIcon: "SiHtml5", propValue: "HTML", propPercent: 80},
              {propIcon: "SiCss3", propValue: "CSS", propPercent: 80},
              {propIcon: "SiJavascript", propValue: "JavaScript", propPercent: 80},
              {propIcon: "SiTypescript", propValue: "TypeScript", propPercent: 85},
            ],
          },
          {
            titleIcon: "bi bi-badge-hd-fill",
            titleColor: {color: "#990033"},
            titleValue: "  Front  ",
            props: [
              {propIcon: "SiBootstrap", propValue: "Bootstrap", propPercent: 80},
              {propIcon: "SiReact", propValue: "React", propPercent: 70},
            ],
          },

        ],
      },

      // -------------------------------------------------------------------------------------------
      {
        rowNumber: 2,
        rowValue: [
          {
            titleIcon: "bi bi-file-earmark-code-fill",
            titleColor: {color: "#007bff"},
            titleValue: "  Back  ",
            props: [
              {propIcon: "FaJava", propValue: "Java", propPercent: 85},
              {propIcon: "BsFiletypeJava", propValue: "Jsp", propPercent: 80},
              {propIcon: "SiSpring", propValue: "Spring", propPercent: 80},
              {propIcon: "SiSpringboot", propValue: "Boot", propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-file-earmark-code-fill",
            titleColor: {color: "#0056b3"},
            titleValue: "  Back  ",
            props: [
              {propIcon: "FaNodeJs", propValue: "Nodejs", propPercent: 85},
              {propIcon: "SiExpress", propValue: "Expressjs", propPercent: 80},
              {propIcon: "SiWebpack", propValue: "Webpack", propPercent: 80},

            ],
          },
        ],
      },

      // -------------------------------------------------------------------------------------------
      {
        rowNumber: 3,
        rowValue: [
          {
            titleIcon: "bi bi-database-fill-add",
            titleColor: {color: "#28a745"},
            titleValue: "  DB  ",
            props: [
              {propIcon: "TbBrandMysql", propValue: "MySQL", propPercent: 85},
              {propIcon: "SiMariadb", propValue: "MariaDB", propPercent: 80},
              {propIcon: "SiOracle", propValue: "Oracle", propPercent: 70},
              {propIcon: "SiMongodb", propValue: "MongoDB", propPercent: 70},
              {propIcon: "SiPostgresql", propValue: "PostgreSQL", propPercent: 70},
            ],
          },
          {
            titleIcon: "bi bi-gear-fill",
            titleColor: {color: "#6c757d"},
            titleValue: "  Data  ",
            props: [
              {propIcon: "SiApachemaven", propValue: "Maven", propPercent: 85},
              {propIcon: "FaNpm", propValue: "NPM", propPercent: 80},
              {propIcon: "SiGradle", propValue: "Gradle", propPercent: 70},
              {propIcon: "BsFiletypeXml", propValue: "XML", propPercent: 85},
              {propIcon: "SiJson", propValue: "JSON", propPercent: 85},
            ],
          },
        ],
      },

      // -------------------------------------------------------------------------------------------
      {
        rowNumber: 4,
        rowValue: [
          {
            titleIcon: "bi bi-hdd-rack-fill",
            titleColor: {color: "#1b1464"},
            titleValue: "  Server  ",
            props: [
              {propIcon: "SiApache", propValue: "Apache", propPercent: 85},
              {propIcon: "SiApachetomcat", propValue: "Tomcat", propPercent: 80},
              {propIcon: "FcGoogle", propValue: "GCP", propPercent: 85},
              {propIcon: "SiMicrosoftazure", propValue: "Azure", propPercent: 80},
            ],
          },
          {
            titleIcon: "bi bi-terminal-fill",
            titleColor: {color: "#343a40"},
            titleValue: "  System  ",
            props: [
              {propIcon: "SiWindows", propValue: "Windows", propPercent: 85},
              {propIcon: "FcLinux", propValue: "Linux", propPercent: 80},
              {propIcon: "FaCentos", propValue: "CentOS", propPercent: 80},
              {propIcon: "FaUbuntu", propValue: "Ubuntu", propPercent: 80},
            ],
          },
        ],
      },
    ],
  };

  // -----------------------------------------------------------------------------------------------
  const handleClick = (index) => {
    if (activeSection === index) {
      setActiveSection(-1);
    }
    else {
      setActiveSection(index);
    }
  };

  // -----------------------------------------------------------------------------------------------
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
      const newProgressWidths = activeProps.map((prop) => (prop.propPercent));
      setProgressWidths(newProgressWidths);
    }
    else {
      setProgressWidths([]);
    }
  }, [activeSection]);

  // -----------------------------------------------------------------------------------------------
  return (
    <section id="skills" className="skills section-bg">
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
                  <img
                    src={tab}
                    alt={"tab"}
                    width={"25px"}
                    height={"25px"}
                  />
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