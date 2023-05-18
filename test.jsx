import React, {useState, useEffect} from "react";
import {CSSTransition} from "react-transition-group";
import CountUp from "react-countup";
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Skills = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [progressWidths, setProgressWidths] = useState([]);

  const itemsArray = {
    title: ["Skills"],
    skills: [
      {
        rowOne: {
          number: 1,
          title1 : [
            {icon : "bi bi-badge-hd-fill", color : "#007BFF", text : "Frontend"}
          ],
          props1: [
            {propIcon: "SiHtml5", propValue: "HTML5",  propPercent: 100},
            {propIcon: "SiCss3", propValue: "CSS3",  propPercent: 100},
            {propIcon: "SiJavascript", propValue: "JavaScript",  propPercent: 80},
            {propIcon: "SiJquery", propValue: "jQuery",  propPercent: 80},
            {propIcon: "SiReact", propValue: "React",  propPercent: 80},
            {propIcon: "FaNodeJs", propValue: "Node.js",  propPercent: 80},
            {propIcon: "SiBootstrap", propValue: "Bootstrap",  propPercent: 80},
          ],
          title2 : [
            {icon : "bi bi-file-earmark-code-fill", color : "#007BFF", text : "Backend"}
          ],
          props2: [
            {propIcon: "FaJava", propValue: "Java8",  propPercent: 100},
            {propIcon: "FaJava", propValue: "Java11",  propPercent: 80},
            {propIcon: "FaJava", propValue: "Java17",  propPercent: 80},
            {propIcon: "SiSpring", propValue: "Spring",  propPercent: 80},
            {propIcon: "SiSpringboot", propValue: "Boot",  propPercent: 80},
            {propIcon: "SiThymeleaf", propValue: "Thymeleaf",  propPercent: 80},
            {propIcon: "BsFiletypeJava", propValue: "Jsp",  propPercent: 80},
          ],
        },
        rowTwo: {
          number: 2,
          title1 : [
            {icon : "bi bi-database-fill-add", color : "#00d8ff", text : "DB"}
          ],
          props1: [
            {propIcon: "TbBrandMysql", propValue: "MySQL",  propPercent: 100},
            {propIcon: "SiOracle", propValue: "Oracle",  propPercent: 100},
            {propIcon: "SiMariadb", propValue: "MariaDB",  propPercent: 80},
            {propIcon: "SiBower", propValue: "Mybatis",  propPercent: 80},
          ],
          title2 : [
            {icon : "bi bi-hammer", color : "#000E4E", text : "Build"}
          ],
          props2: [
            {propIcon: "SiApachemaven", propValue: "Maven",  propPercent: 80},
            {propIcon: "SiGradle", propValue: "Gradle",  propPercent: 80},
            {propIcon: "FaNpm", propValue: "NPM",  propPercent: 80},
          ],
        },
        rowThree: {
          number: 3,
          title1 : [
            {icon : "bi bi-hdd-rack-fill", color : "#007BFF", text : "Server"}
          ],
          props1: [
            {propIcon: "SiApache", propValue: "Apache",  propPercent: 80},
            {propIcon: "SiApachetomcat", propValue: "Tomcat",  propPercent: 80},
          ],
        },
        rowFour: {
          number: 4,
          title1 : [
            {icon : "bi bi-gear-fill", color : "#007BFF", text : "Data"}
          ],
          props1: [
            {propIcon: "BsFiletypeXml", propValue: "XML",  propPercent: 80},
            {propIcon: "SiJson", propValue: "JSON",  propPercent: 80},
          ],
          title2 : [
            {icon : "bi bi-terminal-fill", color : "#007BFF", text : "System"}
          ],
          props2: [
            {propIcon: "SiWindows", propValue: "Windows",  propPercent: 80},
            {propIcon: "FcLinux", propValue: "Linux",  propPercent: 80},
          ],
        }
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
      itemsArray.skills.forEach((section) => {
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
          <h2>{itemsArray.title}</h2>
        </div>

        {/** start **/}
        {itemsArray.skills.map((key1, index1) => (
          <div key={index1} className="row skills-content">
            {key1.rowValue.map((key2, index2) => (
              <div key={index2} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6" data-aos="fade-up" onClick={() => handleClick(key2.rowNumber)}>
                <h3 className="skills-title text-hover glowing-text">
                  <i className={key2.titleIcon}></i>
                  {key2.titleValue}
                </h3>
                {skillSection.props.map((key3, index3) => (
                  <CSSTransition key={index3} in={activeSection === section.rowNumber} timeout={300} classNames="list-transition" unmountOnExit>
                    <div className="list-content">
                      <div className="progress">
                        <span className="skill">
                          <Icons icon={key3.propIcon} />
                          {key3.propValue}
                          <i className="val">{activeSection === section.rowNumber ? <CountUp end={key3.propPercent} duration={1} /> : 0}%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div className="progress-bar" role="progressbar" aria-valuemin="0"
                            aria-valuemax="100" aria-valuenow={activeSection === section.rowNumber ? prop.propPercent : 0}
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
        {/** end **/}

      </div>
    </section>
  );
};
export default Skills;
