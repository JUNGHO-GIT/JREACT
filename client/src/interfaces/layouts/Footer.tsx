// Footer.tsx

import { useState, useEffect } from "@importReacts";
import { useStoreLoading, useResponsive } from "@importHooks";
import { Div, Img } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Footer = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [thisYear, _setThisYear] = useState<number>(new Date().getFullYear());

  // 7. footer -------------------------------------------------------------------------------------
  const footerNode = () => (
    <Paper className={`main-wrapper bg-darkest-navy shadow-top-4 mt-40 pt-25 pb-20`}>
      <Grid container={true} spacing={0} className={"d-row-center"}>
        <Grid size={xxs ? 12 : xs ? 12 : sm ? 12 : md ? 12 : lg ? 12 : xl ? 12 : xxl ? 12 : 12}>
          <Div className={"d-row-center"}>
            <Img
              hover={true}
              shadow={false}
              radius={false}
              border={false}
              src={"logo"}
              className={"w-40 h-40 radius-50 me-15"}
            />
            <Div className={"fs-1-1rem fw-600 white me-15"}>
              {`${thisYear}`}
            </Div>
            <Div className={"fs-1-0rem fw-400 white me-15"}>
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