// Skills.jsx

import { useState } from "@importReacts";
import { useResponsive } from "@importHooks";
import { Div, Hr, Br, Icons, Img } from "@importComponents";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Skills = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>({
    title: "Skills",
    section: [
      {
        main: {
          img: "front",
          value: "Front",
        },
        sub: [
          { icon: "html", value: "Html" },
          { icon: "css", value: "Css" },
          { icon: "bootstrap", value: "Bootstrap" },
          { icon: "js", value: "Js" },
          { icon: "ts", value: "Ts" },
          { icon: "react", value: "React" },
          { icon: "jsp", value: "Jsp" },
          { icon: "thymeleaf", value: "Thymeleaf" },
        ],
      },
      {
        main: {
          img: "back",
          value: "Back",
        },
        sub: [
          { icon: "java", value: "Java" },
          { icon: "spring", value: "Spring" },
          { icon: "boot", value: "Boot" },
          { icon: "nodejs", value: "Node" },
          { icon: "express", value: "Express" },
          { icon: "webpack", value: "Webpack" },
          { icon: "rn", value: "ReactNative" },
        ],
      },
      {
        main: {
          img: "data",
          value: "Data",
        },
        sub: [
          { icon: "github", value: "Git" },
          { icon: "svn", value: "Svn" },
          { icon: "npm", value: "Npm" },
          { icon: "maven", value: "Maven" },
          { icon: "gradle", value: "Gradle" },
        ],
      },
      {
        main: {
          img: "db",
          value: "DB",
        },
        sub: [
          { icon: "mongodb", value: "Mongo" },
          { icon: "mysql", value: "MySQL" },
          { icon: "mariadb", value: "Maria" },
          { icon: "oracle", value: "Oracle" },
        ],
      },
      {
        main: {
          img: "system",
          value: "System",
        },
        sub: [
          { icon: "windows", value: "Windows" },
          { icon: "android", value: "Android" },
          { icon: "linux", value: "Linux" },
          { icon: "centos", value: "Cent" },
        ],
      },
      {
        main: {
          img: "cloud",
          value: "Cloud & Server",
        },
        sub: [
          { icon: "tomcat", value: "Tomcat" },
          { icon: "apache", value: "Apache" },
          { icon: "nginx", value: "Nginx" },
          { icon: "gcp", value: "Gcp" },
          { icon: "azure", value: "Azure" },
        ],
      },
    ],
  });
  const [isExpended, setIsExpended] = useState<boolean[]>(
    OBJECT.section.map(() => true)
  );

  // 7. skills -------------------------------------------------------------------------------------
  const skillsNode = () => (
    <Paper className={`main-wrapper ${paperClass} border-0 radius-0 shadow-0`}>
      <Grid container={true} spacing={0} className={"w-100p d-left"}>
        <Grid
          size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}
          className={"d-row-left"}
        >
          <Div className={"fs-2-2rem fw-700 dark-navy ml-1vw"}>
            {OBJECT.title}
            <Hr className={"w-140px bg-primary h-3px"} />
          </Div>
        </Grid>
      </Grid>
      <Br m={20} />
      <Grid container={true} spacing={2} columnSpacing={10}
      className={"h-100p d-top border-light-3 radius-2 px-2vw py-4vh"}>
        {OBJECT.section.map((item: any, i: number) => (
          <Grid
            size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 6 : lg ? 6 : xl ? 6 : xxl ? 6 : 6}
            key={i}
          >
            <Accordion expanded={isExpended[i]} className={"radius-0 shadow-0"}>
              <AccordionSummary>
                <Grid container={true} spacing={0} className={"d-col-left"}>
                  <Grid
                    size={12}
                    className={"d-row-left"}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      setIsExpended((prev: any) => ({
                        ...prev,
                        [i]: !prev[i],
                      }));
                    }}
                  >
                    <Div className={"d-center mr-10px"}>
                      <Img
                        max={28}
                        hover={true}
                        shadow={false}
                        border={false}
                        radius={false}
                        src={`${item.main.img}.webp`}
                        group={"icons"}
                      />
                    </Div>
                    <Div className={"fs-1-2rem fw-700 navy"}>
                      {item.main.value}
                    </Div>
                    <Div className={"fs-1-2rem fw-700 navy"}>
                      <Icons
                        key={"ChevronDown"}
                        name={"ChevronDown"}
                        className={"w-18px h-18px"}
                        sx={{
                          transform: isExpended[i] ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    </Div>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container={true} spacing={0} className={"d-left"}>
                  {item.sub.map((sub: any, j: number) => (
                    <Grid
                      size={xxs ? 6 : xs ? 4 : sm ? 3 : md ? 4 : lg ? 4 : xl ? 3 : xxl ? 3 : 3}
                      className={"d-row-left mb-10px"}
                      key={j}
                    >
                      <Div className={"d-center mr-5px"}>
                        <Img
                          min={20}
                          max={20}
                          hover={true}
                          shadow={false}
                          border={false}
                          radius={false}
                          src={`${sub.icon}.webp`}
                          group={"icons"}
                        />
                      </Div>
                      <Div className={"fs-0-9rem fw-500 dark-navy"} max={10}>
                        {sub.value}
                      </Div>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            {(xxs || xs || sm) ? (
              i < OBJECT.section.length - 1 && <Hr className={"bg-light h-3px"} />
            ) : (
              i < OBJECT.section.length - 2 && <Hr className={"bg-light h-3px"} />
            )}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {skillsNode()}
    </>
  );
};