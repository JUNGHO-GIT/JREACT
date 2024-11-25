// About.jsx

import { useState } from "@importReacts";
import { useResponsive } from "@importHooks";
import { Img, Div, Hr, Br } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const About = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>(
    {
      title: "About",
      sub: "FullStack Developer",
      section: [
        {
          title: "Name",
          value: "문정호",
        },
        {
          title: "Birth",
          value: "1996.09.14",
        },
        {
          title: "Email",
          value: "junghomun@naver.com",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT"
        },
      ],
    }
  );

  // 7. about --------------------------------------------------------------------------------------
  const aboutNode = () => (
    <Paper className={`main-wrapper ${paperClass} border-0 radius-0 shadow-0`}>
      <Grid container={true} spacing={0} className={"w-100p d-left"}>
        <Grid
          size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}
          className={"d-row-left"}
        >
          <Div className={"fs-2-2rem fw-700 dark-navy ml-4vw"}>
            {OBJECT.title}
            <Hr className={"w-140px bg-primary h-3px"} />
          </Div>
        </Grid>
      </Grid>
      <Br m={20} />
      <Grid container={true} spacing={2} columnSpacing={10}
      className={"h-100p d-top border-light-3 radius-2 px-2vw py-4vh"}>
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Img
            max={600}
            hover={false}
            radius={true}
            shadow={false}
            border={false}
            src={"about.webp"}
            group={"main"}
          />
        </Grid>
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          {OBJECT.section.map((item: any, i: number) => (
            <Grid container={true} spacing={0} key={i} className={"px-15px"}>
              <Grid size={12} className={"d-left"}>
                {i === 0 && (
                  <Div className={"fs-1-8rem fw-600 navy mb-20px"}>
                    {OBJECT.sub}
                  </Div>
                )}
              </Grid>
              <Grid size={3} className={"d-row-left mb-20px"}>
                <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                  {'●'}
                </Div>
                <Div className={"fs-1-1rem fw-600 light-black"}>
                  {item.title}
                </Div>
              </Grid>
              <Grid size={9} className={"d-row-left mb-20px"}>
                <Div className={"fs-1-0rem fw-500 dark"}>
                  {item.value}
                </Div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {aboutNode()}
    </>
  );
};