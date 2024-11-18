// Hr.tsx

// -------------------------------------------------------------------------------------------------
export const Hr = (props : any) => (
  <div
    className={props?.className}
    style={{
      "backgroundColor": "#f2f2f2",
      "width": `${props?.w || 100}%`,
      "height": `${props?.h || 1}px`,
      "margin": `${props?.px/2}px 0px`,
    }}
  />
);