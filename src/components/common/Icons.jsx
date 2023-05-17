import React from "react";
import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
import {FcGoogle, FcLinux} from "react-icons/fc";
import {BsFiletypeXml, BsFiletypeJava} from "react-icons/bs";
import {SiSpring, SiSpringboot, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiOracle, SiJson, SiGradle, SiJquery, SiApache, SiGithub, SiReact, SiApachemaven, SiThymeleaf, SiApachetomcat, SiBower, SiWindows, SiMariadb} from "react-icons/si";

const Icons = (props) => {

  const iconArray = {
    SiHtml5 : {icon: SiHtml5, color: "#E34F26", size: "1.0em", style: "inline-block"},
    SiCss3 : {icon: SiCss3, color: "#1572B6", size: "1.0em", style: "inline-block"},
    SiJavascript : {icon: SiJavascript, color: "#F7DF1E", size: "1.0em", style: "inline-block"},
    SiJquery : {icon: SiJquery, color: "#0769AD", size: "1.0em", style: "inline-block"},
    SiReact : {icon: SiReact, color: "#61DAFB", size: "1.0em", style: "inline-block"},
    FaNodeJs : {icon: FaNodeJs, color: "#339933", size: "1.0em", style: "inline-block"},
    SiBootstrap : {icon: SiBootstrap, color: "#7952B3", size: "1.0em", style: "inline-block"},
    FaJava : {icon: FaJava, color: "#E51F24", size: "1.0em", style: "inline-block"},
    SiSpring : {icon: SiSpring, color: "#6DC73F", size: "1.0em", style: "inline-block"},
    SiSpringboot : {icon: SiSpringboot, color: "#6DC73F", size: "1.0em", style: "inline-block"},
    SiThymeleaf : {icon: SiThymeleaf, color: "#005F0F", size: "1.0em", style: "inline-block"},
    SiMysql : {icon: SiMysql, color: "#4479A1", size: "1.0em", style: "inline-block"},
    SiOracle : {icon: SiOracle, color: "#F80000", size: "1.0em", style: "inline-block"},
    BsFiletypeJava : {icon: BsFiletypeJava, color: "#007396", size: "1.0em", style: "inline-block"},
    SiGradle : {icon: SiGradle, color: "#02303A", size: "1.0em", style: "inline-block"},
    SiApache : {icon: SiApache, color: "#D22128", size: "1.0em", style: "inline-block"},
    SiApachetomcat : {icon: SiApachetomcat, color: "#D22128", size: "1.0em", style: "inline-block"},
    SiApachemaven : {icon: SiApachemaven, color: "#C71A36", size: "1.0em", style: "inline-block"},
    SiJson : {icon: SiJson, color: "#000000", size: "1.0em", style: "inline-block"},
    FaNpm : {icon: FaNpm, color: "#CB3837", size: "1.0em", style: "inline-block"},
    SiGithub : {icon: SiGithub, color: "#181717", size: "1.0em", style: "inline-block"},
    SiBower : {icon: SiBower, color: "#EF5734", size: "1.0em", style: "inline-block"},
    BsFiletypeXml : {icon: BsFiletypeXml, color: "#E51F24", size: "1.0em", style: "inline-block"},
    SiWindows : {icon: SiWindows, color: "#0078D6", size: "1.0em", style: "inline-block"},
    SiMariadb : {icon: SiMariadb, color: "#003545", size: "1.0em", style: "inline-block"},
    FcGoogle : {icon: FcGoogle, color: "#4285F4", size: "1.0em", style: "inline-block"},
    FcLinux : {icon: FcLinux, color: "#FBC02D", size: "1.0em", style: "inline-block"},
  };

  const {icon, color, size, style} = iconArray[props.icon];

  return (
    <div className="icon">
      {React.createElement(icon, {color: color, size: size, style: {display: style}})}
    </div>
  );
}

export { Icons};