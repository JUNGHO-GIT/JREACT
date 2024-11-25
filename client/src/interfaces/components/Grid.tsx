// Grid.tsx

import { useEffect, useRef } from "@importReacts";
import { Grid as MuiGrid } from "@importMuis";
import { GridProps } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Grid = (props: GridProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // style 속성 자체를 제거
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.removeAttribute("style");
    }
  }, []);

  return (
    <MuiGrid
      {...props}
      ref={cardRef}
      component={"div"}
      className={props?.className || ""}
    />
  );
};
