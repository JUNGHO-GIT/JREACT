import React, {useRef} from "react";
import {InView} from "react-intersection-observer";
import "../App.css";

// Fa
import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
// Si
import {
  SiSpring, SiSpringboot, SiJavascript,
  SiHtml5, SiCss3, SiBootstrap, SiMysql, SiOracle,
  SiJson, SiGradle, SiJquery, SiApache, SiGithub,
  SiReact, SiApachemaven, SiThymeleaf, SiApachetomcat,
  SiBower, SiWindows, SiMariadb
} from "react-icons/si";
// Fc
import {FcGoogle, FcLinux} from "react-icons/fc";
// Bs
import {BsFiletypeXml} from "react-icons/bs";


function Skills() {
	const progressBarRef = useRef(null);

	const animateValue = (element, start, end, duration) => {
		const range = end - start;
		const startTime = new Date().getTime();
		const endTime = startTime + duration;
		let stepTime = 10;

		const run = () => {
			const now = new Date().getTime();
			const remaining = Math.max((endTime - now) / duration, 0);
			const value = Math.round(end - remaining * range);
			element.textContent = value + "%";
			if (value === end) {
				clearInterval(interval);
			}
		};

		const interval = setInterval(run, stepTime);
		run();
	};

	const onInViewChange = (inView) => {
		if (inView && progressBarRef.current) {
			const progressBars = progressBarRef.current.getElementsByClassName("progress-bar");

			for (let el of progressBars) {
				el.style.width = el.getAttribute("aria-valuenow") + "%";
				const valueElement = el.parentElement.previousElementSibling.querySelector(".val");
				const value = parseInt(el.getAttribute("aria-valuenow"), 10);
				animateValue(valueElement, 0, value, 1000);
			}
		}
	};
	return (

		<section id="skills" className="skills section-bg">
			<div className="container">
				<div className="section-title">
					<h2>Skills</h2>
				</div>

				<InView as="div" onChange={onInViewChange}>

          {/** row 1 **************************************************************/}
					<div className="row skills-content" ref={progressBarRef}>
						<div className="col-lg-6" data-aos="fade-up">

              {/** Frontend *************************************************************/}
              <h3 className="skills-title"><i class="bi bi-badge-hd-fill"></i>  Frontend</h3>
              <div className="progress">
                <span className="skill">
                  <SiHtml5 color="#E34F26" /> HTML5 <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiCss3 color="#1572B6" /> CSS3 <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiJavascript color="#F7DF1E" /> JavaScript <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiReact color="#61DBFB" /> React <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiJquery color="#0769AD" /> jQuery <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <FaNodeJs color="#339933" /> Node.js <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiBootstrap color="#7952B3" /> Bootstrap <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** Backend *************************************************************/}
              <h3 className="skills-title"><i class="bi bi-file-code-fill"></i>  Backend</h3>
              <div className="progress">
                <span className="skill">
                  <FaJava color="#E51F24" /> Java <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiSpring color="#6DB33F" /> Spring <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiSpringboot color="#6DB33F" /> Spring Boot <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiThymeleaf color="#005F0F" /> Thymeleaf <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** SQL, DB *************************************************************/}
              <h3 className="skills-title"><i className="bi bi-server"></i>  SQL, DB</h3>
              <div className="progress">
                <span className="skill">
                  <SiMysql color="#4479A1" /> MySQL <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiOracle color="#F80000" /> Oracle <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                <SiMariadb color="#003545" /> MariaDB <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiBower color="#EF5734" /> MyBatis <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** Server *************************************************************/}
              <h3 className="skills-title"><i className="bi bi-hdd-fill"></i>  Server</h3>
              <div className="progress">
                <span className="skill">
                  <SiApache color="#D22128" /> Apache <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiApachetomcat color="#C74000" /> Tomcat <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** cloud *************************************************************/}
              <h3 className="skills-title"><i class="bi bi-cloud-check-fill"></i>  Cloud</h3>
              <div className="progress">
                <span className="skill">
                  <FcGoogle color="#4285F4" /> Google Cloud Platform <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiGithub color="#000000" /> Github <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** Build *************************************************************/}
              <h3 className="skills-title"><i className="bi bi-hammer"></i>  Build</h3>
              <div className="progress">
                <span className="skill">
                  <SiApachemaven color="#C71A36" /> Maven <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <SiGradle color="#02303A" /> Gradle <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <FaNpm color="#CB3837" /> NPM <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** Data *************************************************************/}
              <h3 className="skills-title"><i class="bi bi-gear-fill"></i>  Data</h3>
              <div className="progress">
                <span className="skill">
                  <SiJson color="#000000" /> JSON <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <BsFiletypeXml color="#02303A" /> XML <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/** operating system *************************************************************/}
              <h3 className="skills-title"><i class="bi bi-terminal-fill"></i>  Operating System</h3>
              <div className="progress">
                <span className="skill">
                  <SiWindows color="#0078D6" /> Windows <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <FcLinux color="#FCC624" /> Linux <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
          </div>
				</InView>
			</div>
		</section>
	);
}
export default Skills;
