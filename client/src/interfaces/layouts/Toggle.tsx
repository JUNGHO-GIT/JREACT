// Toggle.tsx

import { useState } from "@importReacts";
import { useCommonValue } from "@importHooks";
import { Div, Icons } from "@importComponents";
import { SpeedDial, Backdrop } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Toggle = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { location, navigate } = useCommonValue();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [open, setOpen] = useState(false);

  // 7. toggle -------------------------------------------------------------------------------------
  const toggleNode = () => (
    <Div className={`d-row p-fixed bottom-3vh z-600 right-3vw`}>
      <Backdrop
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      />
      <SpeedDial
        ariaLabel={"speedDial"}
        open={false}
        className={"hover me-2vw"}
        icon={
          <Icons
            key={"Undo"}
            name={"Undo"}
            fill={"none"}
            color={"#ffffff"}
            className={"w-25 h-25"}
          />
        }
        FabProps={{
          size: "small",
          component: "div",
          className: "shadow-4 bg-dark-grey"
        }}
        onClick={() => {
          if (location.pathname === "/") {
            return;
          }
          navigate(-1);
        }}
      />
      <SpeedDial
        ariaLabel={"speedDial"}
        open={false}
        className={"hover ms-2vw"}
        icon={
          <Icons
            key={"CaretUp"}
            name={"CaretUp"}
            fill={"#ffffff"}
            color={"#ffffff"}
            className={"w-25 h-25"}
          />
        }
        FabProps={{
          size: "small",
          component: "div",
          className: "shadow-4 bg-primary"
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </Div>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {toggleNode()}
    </>
  );
};