// About.jsx

import { useState } from "@importReacts";
import { Img, Div, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const About = () => {

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>({
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
  });

  // -----------------------------------------------------------------------------------------------
  return (
    <Paper className={"main-wrapper p-0"}>
      <Grid container={true} spacing={0}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={"px-20 py-10"}>
          <Div className={"fs-2-0rem fw-700 dark-navy"}>
            {OBJECT.title}
          </Div>
          <Div className={"d-row-left"}>
            <Hr className={"w-100 bg-primary h-3"} />
          </Div>
        </Grid>
      </Grid>
      <Grid container={true} spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} className={"d-center p-10"}>
          <Img
            hover={true}
            radius={true}
            shadow={false}
            border={false}
            src={"profile"}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} className={"p-20"}>
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
                <Div className={"fs-1-1rem fw-600 primary me-5 ls-1"}>
                  {"-"}
                </Div>
                <Div className={"fs-1-1rem fw-600 light-black ls-1"}>
                  {item.title}
                </Div>
              </Grid>
              <Grid size={9} className={"d-row-left mb-20"}>
                {i === 5 ? (
                  <Div className={"fs-1-0rem fw-500 blue ls-1"}>
                    {item.value}
                  </Div>
                ) : (
                  <Div className={"fs-1-0rem fw-500 dark-grey ls-1"}>
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
};