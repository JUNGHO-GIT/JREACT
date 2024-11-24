// Bg.tsx

import { Badge } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Bg = (props: any) => (
  <Badge
    {...props}
    showZero={props?.showZero || true}
    className={"mt-n10px ml-5px"}
    sx={{
      ...props?.sx,
      '& .MuiBadge-badge': {
        color: props?.sx?.color || "white",
        backgroundColor: props?.bgcolor || "#1976d2",
      },
    }}
  />
);