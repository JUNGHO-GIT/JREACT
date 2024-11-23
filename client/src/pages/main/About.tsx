// About.jsx

import { useState } from "@importReacts";
import { useResponsive } from "@importHooks";
import { Img, Div, Hr } from "@importComponents";
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
      <Grid container={true} spacing={0} className={"w-100p d-left mb-20"}>
        <Grid size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}>
          <Div className={"fs-2-0rem fw-700 dark-navy"}>
            {OBJECT.title}
            <Hr className={"w-100 bg-primary h-3"} />
          </Div>
        </Grid>
      </Grid>
      <Grid container={true} spacing={2} columnSpacing={8}  className={"w-100p d-left"}>
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
            <Grid container={true} spacing={0} key={i}>
              <Grid size={12} className={"d-left"}>
                {i === 0 && (
                  <Div className={"fs-1-8rem fw-600 navy mb-20"}>
                    {OBJECT.sub}
                  </Div>
                )}
              </Grid>
              <Grid size={3} className={"d-row-left mb-20"}>
                <Div className={"fs-0-4rem fw-300 dark-navy me-5"}>
                  {'●'}
                </Div>
                <Div className={"fs-1-1rem fw-600 light-black"}>
                  {item.title}
                </Div>
              </Grid>
              <Grid size={9} className={"d-row-left mb-20"}>
                {i === 5 ? (
                  <Div className={"fs-1-0rem fw-500 blue"}>
                    {item.value}
                  </Div>
                ) : (
                  <Div className={"fs-1-0rem fw-500 dark-grey"}>
                    {item.value}
                  </Div>
                )}
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