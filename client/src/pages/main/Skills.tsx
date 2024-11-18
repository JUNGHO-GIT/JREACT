// Skills.jsx

import { Div, Hr, Icons } from "@importComponents";
import { Grid, LinearProgress, Paper } from "@importMuis";
import { useState } from "@importReacts";

// -------------------------------------------------------------------------------------------------
export const Skills = () => {

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>({
    title: "Skills",
    section: [
      {
        main: {
          icon: "bi bi-badge-hd-fill",
          color: "#dc3545",
          value: "Front",
        },
        sub: [
          { icon: "SiHtml5", value: "HTML", percent: 80 },
          { icon: "SiCss3", value: "CSS", percent: 80 },
          { icon: "SiJavascript", value: "JavaScript", percent: 80 },
          { icon: "SiTypescript", value: "TypeScript", percent: 85 },
          { icon: "SiBootstrap", value: "Bootstrap", percent: 80 },
          { icon: "SiReact", value: "React", percent: 70 },
        ],
      },
      {
        main: {
          icon: "bi bi-file-earmark-code-fill",
          color: "#007bff",
          value: "Back",
        },
        sub: [
          { icon: "FaJava", value: "Java", percent: 85 },
          { icon: "BsFiletypeJava", value: "Jsp", percent: 80 },
          { icon: "SiSpring", value: "Spring", percent: 80 },
          { icon: "SiSpringboot", value: "Boot", percent: 80 },
          { icon: "FaNodeJs", value: "Nodejs", percent: 85 },
          { icon: "SiExpress", value: "Expressjs", percent: 80 },
          { icon: "SiWebpack", value: "Webpack", percent: 80 },
        ],
      },
      {
        main: {
          icon: "bi bi-database-fill-add",
          color: "#28a745",
          value: "DB",
        },
        sub: [
          { icon: "TbBrandMysql", value: "MySQL", percent: 85 },
          { icon: "SiMariadb", value: "MariaDB", percent: 80 },
          { icon: "SiOracle", value: "Oracle", percent: 70 },
          { icon: "SiMongodb", value: "MongoDB", percent: 70 },
          { icon: "SiPostgresql", value: "Postgres", percent: 70 },
          { icon: "SiApachemaven", value: "Maven", percent: 85 },
          { icon: "FaNpm", value: "NPM", percent: 80 },
          { icon: "SiGradle", value: "Gradle", percent: 70 },
          { icon: "BsFiletypeXml", value: "XML", percent: 85 },
          { icon: "SiJson", value: "JSON", percent: 85 },
        ],
      },
      {
        main: {
          icon: "bi bi-hdd-rack-fill",
          color: "#1b1464",
          value: "Server",
        },
        sub: [
          { icon: "SiApache", value: "Apache", percent: 85 },
          { icon: "SiApachetomcat", value: "Tomcat", percent: 80 },
          { icon: "FcGoogle", value: "GCP", percent: 85 },
          { icon: "SiMicrosoftazure", value: "Azure", percent: 80 },
          { icon: "SiWindows", value: "Windows", percent: 85 },
          { icon: "FcLinux", value: "Linux", percent: 80 },
          { icon: "FaCentos", value: "CentOS", percent: 80 },
          { icon: "FaUbuntu", value: "Ubuntu", percent: 80 },
        ],
      },
    ],
  });

  // -----------------------------------------------------------------------------------------------
  return (
    <Paper className={"content-wrapper p-0"}>
      <Grid container={true} spacing={0}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={"d-left p-20"}>
          <Div className={"fs-2-0rem fw-700 dark-navy mb-10"}>
            {OBJECT.title}
          </Div>
          <Hr className={"w-100 bg-primary h-3"} />
        </Grid>
      </Grid>
      {OBJECT.section.map((item: any, i: number) => (
        0 <= i && i <= 3 && (
          <Grid container={true} spacing={0} key={i}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className={"d-left p-20"}>
              <Div className={"fs-1-4rem fw-600 navy mb-20"}>
                {item.main.value}
              </Div>
              {item.sub.map((sub: any, j: number) => (
                <Grid container={true} spacing={0} key={j}>
                  <Grid size={1} className={"d-row-left mb-10"}>
                    <Icons
                      icon={sub.icon}
                      className={"d-center"}
                    />
                  </Grid>
                  <Grid size={3} className={"d-row-left mb-10"}>
                    <Div className={"fs-0-9 fw-500 dark-navy"}>
                      {sub.value}
                    </Div>
                  </Grid>
                  <Grid size={6} className={"d-row-left mb-10"}>
                    <LinearProgress
                      variant={"buffer"}
                      value={sub.percent}
                      valueBuffer={100}
                      className={"w-80p h-7"}
                    />
                  </Grid>
                  <Grid size={2} className={"d-row-left mb-10"}>
                    <Div className={"fs-0-8rem fw-600 primary"}>
                      {sub.percent}%
                    </Div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )
      ))}
    </Paper>
  );
};