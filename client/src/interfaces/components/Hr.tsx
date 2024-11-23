// Hr.tsx

// -------------------------------------------------------------------------------------------------
export const Hr = (props : any) => (
  <div
    className={props?.className}
    style={{
      "background": "rgb(207 207 207)",
      "width": `${(props?.w) || 100}%`,
      "height": `${(props?.h) || 1.0}px`,
      "margin": `${(props?.m / 2) || 0}px 0px`,
    }}
  />
);