// Footer.tsx

import { useState } from "@importReacts";
import { useResponsive } from "@importHooks";
import { Div, Img } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Footer = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { xxs, xs, sm, md, lg, xl, xxl } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [thisYear, _setThisYear] = useState<number>(new Date().getFullYear());

  // 7. footer -------------------------------------------------------------------------------------
  const footerNode = () => (
    <Paper className={`layout-wrapper bg-darkest-navy shadow-top-4px border-0 radius-0 mt-40px`}>
      <Grid container={true} spacing={0} className={"d-row-center"}>
        <Grid size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}>
          <Div className={"d-row-center"}>
            <Img
              hover={true}
              shadow={false}
              radius={false}
              border={false}
              src={"logo.webp"}
              group={"main"}
              className={"w-40px h-40px radius-50 mr-15px"}
            />
            <Div className={"fs-1-1rem fw-600 white mr-15px"}>
              {`${thisYear}`}
            </Div>
            <Div className={"fs-1-0rem fw-400 white mr-15px"}>
              {`All rights reserved`}
            </Div>
          </Div>
        </Grid>
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {footerNode()}
    </>
  );
};