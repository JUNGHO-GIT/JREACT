// Paper.tsx

import { useEffect, useRef } from "@importReacts";
import { Paper as MuiPaper } from "@importMuis";
import { PaperProps } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Paper = (props: PaperProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // style 속성 자체를 제거
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.removeAttribute("style");
    }
  }, []);

  return (
    <MuiPaper
      {...props}
      ref={cardRef}
      component={"div"}
      className={props?.className || ""}
    />
  );
};
