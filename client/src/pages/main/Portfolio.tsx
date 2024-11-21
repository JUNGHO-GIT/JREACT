// Portfolio.jsx

import { useState, useEffect } from "@importReacts";
import { useResponsive, useCommonValue } from "@importHooks";
import { Img, Hr, Div } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Portfolio = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { navigate } = useCommonValue();
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>({
    title: "Portfolios",
    section: [
      {
        id: "1",
        name: "JREACT",
        desc: "Portfolio Page with React",
        icon: "react",
        img: "project1_1",
      },
      {
        id: "2",
        name: "JLINT",
        desc: "Vscode Language Formatter Extension",
        icon: "nodejs",
        img: "project2_1",
      },
      {
        id: "3",
        name: "JUNGHQLO",
        desc: "Online Clothing Shopping Store",
        icon: "boot",
        img: "project3_1",
      },
      {
        id: "4",
        name: "GOOD-NEIGHBOR",
        desc: "Charity and Donation Website",
        icon: "spring",
        img: "project4_1",
      },
    ],
  });

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    const imageContainer = document.querySelectorAll(".image-container");
    const imageOverlay = document.querySelectorAll(".image-overlay");

    imageContainer.forEach((el: any) => {
      Object.assign(el.style, {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      });
    });
    imageOverlay.forEach((el: any) => {
      Object.assign(el.style, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'none',
      });
      el.parentElement.addEventListener('mouseover', () => {
        Object.assign(el.style, {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        });
      });
      el.parentElement.addEventListener('mouseout', () => {
        Object.assign(el.style, {
          display: 'none',
        });
      });
    });
  }, []);

  // 7. portfolio ----------------------------------------------------------------------------------
  const portfolioNode = () => (
    <Paper className={`main-wrapper ${paperClass}`}>
      <Grid container={true} spacing={0} className={"w-100p d-left mb-20"}>
        <Grid size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}>
          <Div className={"fs-2-0rem fw-700 dark-navy"}>
            {OBJECT.title}
            <Hr className={"w-100 bg-primary h-3"} />
          </Div>
        </Grid>
      </Grid>
      <Grid container={true} spacing={2} className={"w-100p d-left"}>
        {OBJECT.section.map((item: any, i: number) => (
          <Grid size={(xxs || xs || sm) ? 12 : (md || lg) ? 6 : (xl || xxl) ? 4 : 4} key={i}>
            <Div className={"p-relative d-center"}>
              <Div className={"image-container"}>
                <Img
                  max={600}
                  hover={true}
                  shadow={false}
                  border={false}
                  radius={false}
                  src={item.img}
                  group={"project"}
                />
              </Div>
              <Div className={"image-overlay fadeIn"}>
                <Div
                  className={"d-row-center mt-40 mb-20 hover"}
                  onClick={() => {
                    navigate(`/details/project${item.id}`);
                  }}
                >
                  <Img
                    max={60}
                    hover={false}
                    shadow={false}
                    border={false}
                    radius={false}
                    src={item.icon}
                    group={"icon"}
                    className={"me-10"}
                  />
                  <Div className={"fs-1-8rem fw-700 white ls-4"}>
                    {item.name}
                  </Div>
                </Div>
                <Div className={"d-row-center mb-20"}>
                  <Div className={"fs-1-0rem fw-400 white"}>
                    {item.desc}
                  </Div>
                </Div>
              </Div>
            </Div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {portfolioNode()}
    </>
  );
};