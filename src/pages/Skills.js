import React, {useRef, useState, useEffect, useCallback} from "react";
import {InView} from "react-intersection-observer";
import {CSSTransition} from "react-transition-group";
import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
import {FcGoogle, FcLinux} from "react-icons/fc";
import {BsFiletypeXml, BsFiletypeJava} from "react-icons/bs";
import {SiSpring, SiSpringboot, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiOracle, SiJson, SiGradle, SiJquery, SiApache, SiGithub, SiReact, SiApachemaven, SiThymeleaf, SiApachetomcat, SiBower, SiWindows, SiMariadb} from "react-icons/si";
import "../app/App.css";

function Skills() {
	// variables
	const progressBarRef = useRef(null);

	// animateValue()
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

	// toggleCollapse()
	const [isCollapsed, setIsCollapsed] = useState({
		row1: true,
		row2: true,
		row3: true,
		row4: true,
	});

	const toggleCollapse = useCallback((section) => {
		setIsCollapsed((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	}, []);

	const onInViewChange = useCallback(
		(inView, section) => {
			if (inView) {
				if (progressBarRef.current) {
					progressBarRef.current.querySelectorAll(".progress-bar").forEach((element) => {
						const start = 0;
						const end = element.getAttribute("aria-valuenow");
						const duration = 1000;
						animateValue(element, start, end, duration);
					});
				}
			}
		},
		[progressBarRef],
	);

	useEffect(() => {
		Object.keys(isCollapsed).forEach((key) => {
			if (!isCollapsed[key]) {
				onInViewChange(true, key);
			}
		});
	}, [isCollapsed, onInViewChange]);

	// return()
	return (
		<section id="skills" className="skills section-bg">
			<div className="container">
				<div className="section-title">
					<h2>Skills</h2>
				</div>

				<InView as="div" onChange={onInViewChange}>
					{/** row 1 **/}
					<div className="row skills-content" ref={progressBarRef}>
						{/** col 1 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** Frontend **********************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row1")}>
								<i className="bi bi-badge-hd-fill"></i> Frontend
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 1 **/}

						{/** col 2 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** Backend ***********************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row1")}>
								<i className="bi bi-badge-hd-fill"></i> backend
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
									<div className="progress">
										<span className="skill">
											<FaJava color="#E51F24" /> Java 8 <i className="val">100%</i>
										</span>
										<div className="progress-bar-wrap">
											<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div className="progress">
										<span className="skill">
											<FaJava color="#E51F24" /> Java 11 <i className="val">90%</i>
										</span>
										<div className="progress-bar-wrap">
											<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
									<div className="progress">
										<span className="skill">
											<FaJava color="#E51F24" /> Java 17 <i className="val">80%</i>
										</span>
										<div className="progress-bar-wrap">
											<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
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
									<div className="progress">
										<span className="skill">
											<BsFiletypeJava color="#E51F24" /> JSP <i className="val">60%</i>
										</span>
										<div className="progress-bar-wrap">
											<div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</CSSTransition>
						</div>
						{/** /.col 2 **/}
					</div>
					{/** /.row 1 **/}

					{/** row 2 **/}
					<div className="row skills-content" ref={progressBarRef}>
						{/** col 3 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** SQL, DB ***********************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row2")}>
								<i className="bi bi-badge-hd-fill"></i> sql
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 3 **/}

						{/** col 4 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** Build *************************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row2")}>
								<i className="bi bi-badge-hd-fill"></i> build
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 4 **/}
					</div>

					{/** row 3 **/}
					<div className="row skills-content" ref={progressBarRef}>
						{/** col 5 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** Server ************************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row3")}>
								<i className="bi bi-badge-hd-fill"></i> server
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 5 **/}

						{/** col 6 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** cloud *************************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row3")}>
								<i className="bi bi-badge-hd-fill"></i> cloud
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 6 **/}
					</div>
					{/** /.row 3 **/}

					{/** row 4 **/}
					<div className="row skills-content" ref={progressBarRef}>
						{/** col 7 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** Data **************************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row4")}>
								<i className="bi bi-badge-hd-fill"></i> data
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
								</div>
							</CSSTransition>
						</div>
						{/** /.col 7 **/}

						{/** col 8 **/}
						<div className="col-lg-6" data-aos="fade-up">
							{/** operating system **************************************************************/}
							<h3 className="skills-title" onClick={() => toggleCollapse("row4")}>
								<i className="bi bi-badge-hd-fill"></i> system
							</h3>
							<CSSTransition in={!isCollapsed.frontend} timeout={300} classNames="list-transition" unmountOnExit>
								<div className="list-content">
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
							</CSSTransition>
						</div>
						{/** /.col 8 **/}
					</div>
					{/** /.row 4 **/}
				</InView>
			</div>
		</section>
	);
}

export default Skills;
