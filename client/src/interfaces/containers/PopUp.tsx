// PopUp.tsx

import { useState, useEffect } from "@importReacts";
import { Popover, bindPopover, usePopupState } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const PopUp = (props: any) => {

  // 2-1. useState ---------------------------------------------------------------------------------
  const popupState = usePopupState({
    variant: "popover",
    popupId: "popup",
  });
  const [popupStyle, setPopupStyle] = useState<Partial<CSSStyleDeclaration>>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    if (props?.type === "innerCenter") {
      setPopupStyle((prev: any) => ({
        ...prev,
        border: '0.2px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        padding: "20px"
      }));
    }
    else if (props?.type === "alert") {
      setPopupStyle((prev: any) => ({
        ...prev,
        border: '1px solid red',
        boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
        padding: "6px"
      }));
    }
    else if (props?.type === "chart") {
      setPopupStyle((prev: any) => ({
        ...prev,
        border: '0.2px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        padding: "6px 0px 6px 12px"
      }));
    }
    else if (props?.type === "modal") {
      setPopupStyle((prev: any) => ({
        ...prev,
        border: '0.2px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        padding: "10px"
      }));
    }
  }, [props?.type]);

  // 1. 팝업 고정 ----------------------------------------------------------------------------------
  const chainedPopUp = () => (
    <>
    <Popover
      {...bindPopover(popupState)}
      id={"popover"}
      open={popupState.isOpen}
      anchorEl={popupState.anchorEl}
      onClose={(_event, reason) => {
        if (reason === "backdropClick") {
          popupState.close();
        }
      }}
      anchorOrigin={{
        vertical: props?.position === "center" ? "center" : (
          props?.position === "top" ? "top" : "bottom"
        ),
        horizontal: props?.direction === "center" ? "center" : (
          props?.direction === "right" ? "right" : "left"
        )
      }}
      transformOrigin={{
        vertical: props?.position === "center" ? "center" : (
          props?.position === "top" ? "bottom" : "top"
        ),
        horizontal: props?.direction === "center" ? "center" : (
          props?.direction === "right" ? "left" : "right"
        )
      }}
      slotProps={{
        paper: {
          style: popupStyle as React.CSSProperties
        }
      }}
    >
      {
        typeof props?.contents === "function"
        ? props?.contents({ closePopup: popupState.close })
        : props?.contents
      }
    </Popover>
    {props?.children({
      openPopup: (anchorEl: any) => {
        popupState.setAnchorEl(anchorEl);
        popupState.open();
      },
      closePopup: () => {
        popupState.close();
      }
    })}
    </>
  );

  // 2. 팝업 화면 정중앙 ---------------------------------------------------------------------------
  const innerCenterPopUp = () => (
    <>
    <Popover
      {...bindPopover(popupState)}
      id={"popover"}
      open={popupState.isOpen}
      anchorEl={null}
      onClose={(_event, reason) => {
        if (reason === "backdropClick") {
          popupState.close();
        }
      }}
      anchorReference={"anchorPosition"}
      anchorPosition={{
        top: window.innerHeight / 2,
        left: window.innerWidth / 2
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      slotProps={{
        paper: {
          style: popupStyle as React.CSSProperties
        }
      }}
    >
      {
        typeof props?.contents === "function"
        ? props?.contents({ closePopup: popupState.close })
        : props?.contents
      }
    </Popover>
    {props?.children({
      openPopup: (anchorEl: any) => {
        popupState.setAnchorEl(anchorEl);
        popupState.open();
      },
      closePopup: () => {
        popupState.close();
      }
    })}
    </>
  );

  // 15. return ------------------------------------------------------------------------------------
  return (
    <>
      {props?.type === "innerCenter" && innerCenterPopUp()}
      {props?.type !== "innerCenter" && chainedPopUp()}
    </>
  );
};