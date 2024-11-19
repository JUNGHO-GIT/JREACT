// Skills.jsx

import { useState } from "@importReacts";
import { useResponsive } from "@importHooks";
import { Div, Hr, Icons, Img } from "@importComponents";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Skills = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { xxs, xs, sm, md, lg, xl, xxl } = useResponsive();

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
          { icon: "js", value: "Js" },
          { icon: "ts", value: "Ts" },
          { icon: "bootstrap", value: "Bootstrap" },
          { icon: "react", value: "React" },
        ],
      },
      {
        main: {
          img: "back",
          value: "Back",
        },
        sub: [
          { icon: "java", value: "Java" },
          { icon: "jsp", value: "Jsp" },
          { icon: "spring", value: "Spring" },
          { icon: "boot", value: "Boot" },
          { icon: "nodejs", value: "Node" },
          { icon: "express", value: "Express" },
          { icon: "webpack", value: "Webpack" },
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
          img: "data",
          value: "Data",
        },
        sub: [
          { icon: "github", value: "Git" },
          { icon: "maven", value: "Maven" },
          { icon: "npm", value: "Npm" },
          { icon: "gradle", value: "Gradle" },
          { icon: "xml", value: "Xml" },
          { icon: "json", value: "Json" },
        ],
      },
      {
        main: {
          img: "server",
          value: "Server",
        },
        sub: [
          { icon: "tomcat", value: "Tomcat" },
          { icon: "apache", value: "Apache" },
          { icon: "nginx", value: "Nginx" },
        ],
      },
      {
        main: {
          img: "cloud",
          value: "Cloud",
        },
        sub: [
          { icon: "gcp", value: "Gcp" },
          { icon: "azure", value: "Azure" },
        ],
      },
      {
        main: {
          img: "system",
          value: "System",
        },
        sub: [
          { icon: "windows", value: "Windows" },
          { icon: "linux", value: "Linux" },
          { icon: "centos", value: "CentOS" },
          { icon: "android", value: "Android" },
        ],
      },
    ],
  });
  const [isExpended, setIsExpended] = useState<boolean[]>(
    OBJECT.section.map(() => true)
  );

  // -----------------------------------------------------------------------------------------------
  return (
    <Paper className={"content-wrapper p-0"}>
      <Grid container={true} spacing={0}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={"px-20 py-10"}>
          <Div className={"fs-2-0rem fw-700 dark-navy"}>
            {OBJECT.title}
          </Div>
          <Hr className={"w-100 bg-primary h-3"} />
        </Grid>
      </Grid>
      {OBJECT.section.map((item: any, i: number) => (
        <Grid container={true} spacing={0} key={i}>
          <Grid size={12} className={"px-10"}>
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
                    <Div className={"d-center me-10"}>
                      <Img
                        max={35}
                        hover={true}
                        shadow={false}
                        border={false}
                        radius={false}
                        src={item.main.img}
                        group={"icon"}
                      />
                    </Div>
                    <Div className={"fs-1-2rem fw-700 navy"}>
                      {item.main.value}
                    </Div>
                    <Div className={"fs-1-2rem fw-700 navy"}>
                      <Icons
                        key={"ChevronDown"}
                        name={"ChevronDown"}
                        className={"w-18 h-18"}
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
                      size={xxs ? 6 : xs ? 4 : sm ? 3 : md ? 3 : lg ? 2 : xl ? 2 : xxl ? 2 : 2}
                      className={"d-row-left mb-10"}
                      key={j}
                    >
                      <Div className={"d-center me-5"}>
                        <Img
                          max={25}
                          hover={true}
                          shadow={false}
                          border={false}
                          radius={false}
                          src={sub.icon}
                          group={"icon"}
                        />
                      </Div>
                      <Div className={"fs-0-8 fw-500 dark-navy"}>
                        {sub.value}
                      </Div>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid size={12} className={"px-20"}>
            <Hr className={"bg-light h-2"} />
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};