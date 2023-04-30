import React, {useRef, useState, useEffect, useCallback} from "react";
import {InView} from "react-intersection-observer";
import {CSSTransition} from "react-transition-group";
import {Waypoint} from "react-waypoint";
import CountUp from "react-countup";
// icons
import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
import {FcGoogle, FcLinux} from "react-icons/fc";
import {BsFiletypeXml, BsFiletypeJava} from "react-icons/bs";
import {SiSpring, SiSpringboot, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiOracle, SiJson, SiGradle, SiJquery, SiApache, SiGithub, SiReact, SiApachemaven, SiThymeleaf, SiApachetomcat, SiBower, SiWindows, SiMariadb} from "react-icons/si";
import "../app/App.css";

const skillsSections = [
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Frontend",
		props: [
			{
				propIcon: SiHtml5,
				propValue: "HTML5",
				propColor: "#E34F26",
				propPercent: 100,
			},
			{
				propIcon: SiCss3,
				propValue: "CSS3",
				propColor: "#1572B6",
				propPercent: 100,
			},
			{
				propIcon: SiJavascript,
				propValue: "JavaScript",
				propColor: "#F7DF1E",
				propPercent: 80,
			},
			{
				propIcon: SiJquery,
				propValue: "jQuery",
				propColor: "#0769AD",
				propPercent: 80,
			},
			{
				propIcon: SiReact,
				propValue: "React",
				propColor: "#61DAFB",
				propPercent: 80,
			},
			{
				propIcon: FaNodeJs,
				propValue: "Node.js",
				propColor: "#339933",
				propPercent: 80,
			},
			{
				propIcon: SiBootstrap,
				propValue: "Bootstrap",
				propColor: "#7952B3",
				propPercent: 80,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Backend",
		props: [
			{
				propIcon: FaJava,
				propValue: "Java8",
				propColor: "#E51F24",
				propPercent: 100,
			},
			{
				propIcon: FaJava,
				propValue: "Java11",
				propColor: "#E51F24",
				propPercent: 80,
			},
			{
				propIcon: FaJava,
				propValue: "Java17",
				propColor: "#E51F24",
				propPercent: 80,
			},
			{
				propIcon: SiSpring,
				propValue: "Spring",
				propColor: "#6DB33F",
				propPercent: 80,
			},
			{
				propIcon: SiSpringboot,
				propValue: "Boot",
				propColor: "#6DB33F",
				propPercent: 80,
			},
			{
				propIcon: SiThymeleaf,
				propValue: "Thymeleaf",
				propColor: "#005F0F",
				propPercent: 80,
			},
			{
				propIcon: BsFiletypeJava,
				propValue: "Jsp",
				propColor: "#E51F24",
				propPercent: 80,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "DB",
		props: [
			{
				propIcon: SiMysql,
				propValue: "MySQL",
				propColor: "#4479A1",
				propPercent: 100,
			},
			{
				propIcon: SiOracle,
				propValue: "Oracle",
				propColor: "#F80000",
				propPercent: 100,
			},
			{
				propIcon: SiMariadb,
				propValue: "MariaDB",
				propColor: "#003545",
				propPercent: 80,
			},
			{
				propIcon: SiBower,
				propValue: "Mybatis",
				propColor: "#EF5734",
				propPercent: 80,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Build",
		props: [
			{
				propIcon: SiApachemaven,
				propValue: "Maven",
				propColor: "#C71A36",
				propPercent: 80,
			},
			{
				propIcon: SiGradle,
				propValue: "Gradle",
				propColor: "#02303A",
				propPercent: 80,
			},
			{propIcon: FaNpm, propValue: "NPM", propColor: "#CB3837", propPercent: 80},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Server",
		props: [
			{
				propIcon: SiApache,
				propValue: "Apache",
				propColor: "#D22128",
				propPercent: 80,
			},
			{
				propIcon: SiApachetomcat,
				propValue: "Tomcat",
				propColor: "#F8DC75",
				propPercent: 80,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Cloud",
		props: [
			{
				propIcon: FcGoogle,
				propValue: "Google",
				propColor: "#4285F4",
				propPercent: 80,
			},
			{
				propIcon: SiGithub,
				propValue: "Git",
				propColor: "#F05032",
				propPercent: 100,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "Data",
		props: [
			{
				propIcon: BsFiletypeXml,
				propValue: "XML",
				propColor: "#EE0000",
				propPercent: 80,
			},
			{
				propIcon: SiJson,
				propValue: "JSON",
				propColor: "#000000",
				propPercent: 80,
			},
		],
	},
	{
		titleIcon: "bi bi-badge-hd-fill",
		titleValue: "System",
		props: [
			{
				propIcon: SiWindows,
				propValue: "Windows",
				propColor: "#0078D6",
				propPercent: 80,
			},
			{
				propIcon: FcLinux,
				propValue: "Linux",
				propColor: "#FCC624",
				propPercent: 80,
			},
		],
	},
];

const Skills = () => {
	const progressBarRef = React.useRef(null);
	const [activeSection, setActiveSection] = useState(-1);
	const [progressWidths, setProgressWidths] = useState([]);

	const handleClick = (index) => {
		if (activeSection === index) {
			setActiveSection(-1);
		} else {
			setActiveSection(index);
		}
	};

	useEffect(() => {
		if (activeSection !== -1) {
			const newProgressWidths = skillsSections[activeSection].props.map((prop) => prop.propPercent);
			setProgressWidths(newProgressWidths);
		} else {
			setProgressWidths([]);
		}
	}, [activeSection]);

	return (
		<section id="skills" className="skills section-bg">
			<div className="container">
				<div className="section-title">
					<h2>Skills</h2>
				</div>
				<div className="row skills-content">
					{skillsSections.map((section, sectionIndex) => (
						<div key={sectionIndex} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6" data-aos="fade-up" onClick={() => handleClick(sectionIndex)}>
							<h3 className="skills-title">
								<i className={section.titleIcon}></i>
								{section.titleValue}
							</h3>
							{section.props.map((prop, propIndex) => (
								<CSSTransition key={propIndex} in={activeSection === sectionIndex} timeout={300} classNames="list-transition" unmountOnExit>
									<div className="list-content">
										<div className="progress">
											<span className="skill">
												<prop.propIcon color={prop.propColor} />
												{prop.propValue}
												<i className="val">{activeSection === sectionIndex ? <CountUp end={prop.propPercent} duration={1} /> : 0}%</i>
											</span>
											<div className="progress-bar-wrap">
												<div
													className="progress-bar"
													role="progressbar"
													aria-valuemin="0"
													aria-valuemax="100"
													aria-valuenow={activeSection === sectionIndex ? prop.propPercent : 0}
													style={{
														width: `${activeSection === sectionIndex ? progressWidths[propIndex] || 0 : 0}%`,
														transition: activeSection === sectionIndex ? "width 1s" : "",
													}}></div>
											</div>
										</div>
									</div>
								</CSSTransition>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
