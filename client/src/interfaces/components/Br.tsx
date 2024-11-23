// Br.tsx

// -------------------------------------------------------------------------------------------------
export const Br = (props: any) => (
  <div
    className={props?.className || ""}
    style={{
      "background": "none",
      "width": `${(props?.w) || 100}%`,
      "height": `${(props?.h) || 0}px`,
      "margin": `${(props?.m / 2) || 0}px 0px`,
    }}
  />
);