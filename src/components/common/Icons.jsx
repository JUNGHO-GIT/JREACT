import React from "react";
import {GiBeaver} from "react-icons/gi";
import {RxDash} from  "react-icons/rx";
import {TbBrandVscode, TbBrandMysql} from "react-icons/tb";
import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
import {BsFiletypeXml, BsFiletypeJava} from "react-icons/bs";
import {FcGoogle, FcLinux, FcExpand, FcAbout, FcSettings, FcSearch, FcCursor} from "react-icons/fc";
import {SiSpring, SiSpringboot, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiOracle, SiJson, SiGradle, SiJquery, SiApache, SiGithub, SiReact, SiApachemaven, SiThymeleaf, SiTypescript, SiApachetomcat, SiBower, SiWindows, SiMariadb, SiMarkdown, SiNginx} from "react-icons/si";

const Icons = (props) => {

  const iconArray = {

    // Gi
    GiBeaver : {icon: GiBeaver, color: "#004F99", size: "1.0em", style: "inline-block"},

    // Rx
    RxDash : {icon: RxDash, color: "#000000", size: "1.0em", style: "inline-block"},

    // Tb
    TbBrandVscode : {icon: TbBrandVscode, color: "#007ACC", size: "1.0em", style: "inline-block"},
    TbBrandMysql : {icon: TbBrandMysql, color: "#4479A1", size: "1.0em", style: "inline-block"},

    // Fa
    FaNodeJs : {icon: FaNodeJs, color: "#339933", size: "1.0em", style: "inline-block"},
    FaJava : {icon: FaJava, color: "#E51F24", size: "1.0em", style: "inline-block"},
    FaNpm : {icon: FaNpm, color: "#CB3837", size: "1.0em", style: "inline-block"},

    // Bs
    BsFiletypeJava : {icon: BsFiletypeJava, color: "#E51F24", size: "1.0em", style: "inline-block"},
    BsFiletypeXml : {icon: BsFiletypeXml, color: "#E51F24", size: "1.0em", style: "inline-block"},

    // Fc
    FcExpand : {icon: FcExpand, color: "#000000", size: "1.0em", style: "inline-block"},
    FcGoogle : {icon: FcGoogle, color: "#4285F4", size: "1.0em", style: "inline-block"},
    FcLinux : {icon: FcLinux, color: "#FBC02D", size: "1.0em", style: "inline-block"},
    FcAbout : {icon: FcAbout, color: "#000000", size: "1.0em", style: "inline-block"},
    FcSettings : {icon: FcSettings, color: "#000000", size: "1.0em", style: "inline-block"},
    FcSearch : {icon: FcSearch, color: "#000000", size: "1.0em", style: "inline-block"},
    FcCursor : {icon: FcCursor, color: "#000000", size: "1.0em", style: "inline-block"},

    // Si
    SiHtml5 : {icon: SiHtml5, color: "#E34F26", size: "1.0em", style: "inline-block"},
    SiCss3 : {icon: SiCss3, color: "#1572B6", size: "1.0em", style: "inline-block"},
    SiJavascript : {icon: SiJavascript, color: "#F7DF1E", size: "1.0em", style: "inline-block"},
    SiTypescript : {icon: SiTypescript, color: "#007ACC", size: "1.0em", style: "inline-block"},
    SiJquery : {icon: SiJquery, color: "#0769AD", size: "1.0em", style: "inline-block"},
    SiNginx : {icon: SiNginx, color: "#269539", size: "1.0em", style: "inline-block"},
    SiReact : {icon: SiReact, color: "#61DAFB", size: "1.0em", style: "inline-block"},
    SiMarkdown : {icon: SiMarkdown, color: "#000000", size: "1.0em", style: "inline-block"},
    SiBootstrap : {icon: SiBootstrap, color: "#7952B3", size: "1.0em", style: "inline-block"},
    SiSpring : {icon: SiSpring, color: "#6DC73F", size: "1.0em", style: "inline-block"},
    SiSpringboot : {icon: SiSpringboot, color: "#6DC73F", size: "1.0em", style: "inline-block"},
    SiThymeleaf : {icon: SiThymeleaf, color: "#005F0F", size: "1.0em", style: "inline-block"},
    SiOracle : {icon: SiOracle, color: "#F80000", size: "1.0em", style: "inline-block"},
    SiGradle : {icon: SiGradle, color: "#02303A", size: "1.0em", style: "inline-block"},
    SiApache : {icon: SiApache, color: "#D22128", size: "1.0em", style: "inline-block"},
    SiApachetomcat : {icon: SiApachetomcat, color: "#D22128", size: "1.0em", style: "inline-block"},
    SiApachemaven : {icon: SiApachemaven, color: "#C71A36", size: "1.0em", style: "inline-block"},
    SiJson : {icon: SiJson, color: "#000000", size: "1.0em", style: "inline-block"},
    SiGithub : {icon: SiGithub, color: "#181717", size: "1.0em", style: "inline-block"},
    SiBower : {icon: SiBower, color: "#EF5734", size: "1.0em", style: "inline-block"},
    SiWindows : {icon: SiWindows, color: "#0078D6", size: "1.0em", style: "inline-block"},
    SiMariadb : {icon: SiMariadb, color: "#003545", size: "1.0em", style: "inline-block"},
  };

  const {icon, color, size, style} = iconArray[props.icon];

  return (
    <div className="icon">
      {React.createElement(icon, {color: color, size: size, style: {display: style}})}
    </div>
  );
}

export { Icons};