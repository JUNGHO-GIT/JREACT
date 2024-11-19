// Icons.tsx


import React from "react";
import { BsFiletypeJava, BsFiletypeXml } from "react-icons/bs";
import { FaCentos, FaJava, FaNodeJs, FaNpm, FaUbuntu } from "react-icons/fa";
import { FcAbout, FcCursor, FcExpand, FcGoogle, FcLinux, FcSearch, FcSettings } from "react-icons/fc";
import { GiBeaver } from "react-icons/gi";
import { RxDash } from "react-icons/rx";
import { SiApache, SiApachemaven, SiApachetomcat, SiBootstrap, SiBower, SiCss3, SiExpress, SiGithub, SiGradle, SiHtml5, SiJavascript, SiJson, SiMariadb, SiMarkdown, SiMicrosoftazure, SiMongodb, SiNginx, SiOracle, SiPostgresql, SiReact, SiSpring, SiSpringboot, SiThymeleaf, SiTypescript, SiWebpack, SiWindows } from "react-icons/si";
import { TbBrandMysql, TbBrandVscode } from "react-icons/tb";

// -------------------------------------------------------------------------------------------------
declare type IconsProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: string;
};

// -------------------------------------------------------------------------------------------------
export const Icons = (
  { icon, ...props }: IconsProps
) => {

  // -----------------------------------------------------------------------------------------------
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
    FaUbuntu : {icon: FaUbuntu, color: "#E95420", size: "1.0em", style: "inline-block"},
    FaCentos : {icon: FaCentos, color: "#262577", size: "1.0em", style: "inline-block"},

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
    SiMicrosoftazure : {icon: SiMicrosoftazure, color: "#0078D4", size: "1.0em", style: "inline-block"},
    SiExpress : {icon: SiExpress, color: "#000000", size: "1.0em", style: "inline-block"},
    SiMongodb : {icon: SiMongodb, color: "#47A248", size: "1.0em", style: "inline-block"},
    SiPostgresql : {icon: SiPostgresql, color: "#336791", size: "1.0em", style: "inline-block"},
    SiWebpack : {icon: SiWebpack, color: "#8DD6F9", size: "1.0em", style: "inline-block"},
  } as any;

  // -----------------------------------------------------------------------------------------------
  return (
    <div {...props}>
      {iconArray?.[icon]?.icon && (
        React.createElement(iconArray?.[icon]?.icon, {
          color: iconArray?.[icon]?.color,
          size: iconArray?.[icon]?.size,
          style: { display: iconArray?.[icon]?.style },
        })
      )}
    </div>
  );
}