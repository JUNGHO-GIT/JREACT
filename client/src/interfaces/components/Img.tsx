// Img.tsx

import { useState, useEffect } from "@importReacts";
import { useCommonValue } from "@importHooks";

// -------------------------------------------------------------------------------------------------
declare type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  group?: string;
  type?: string;
  src?: any;
  hover?: boolean;
  shadow?: boolean;
  radius?: boolean;
  border?: boolean
  max?: number;
};

// -------------------------------------------------------------------------------------------------
export const Img = (
  { group, type, src, hover, shadow, radius, border, max, ...props }: ImgProps
) => {

  // 1. common -------------------------------------------------------------------------------------
  const { GCLOUD_URL } = useCommonValue();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [fileName, setFileName] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");
  const [imageClass, setImageClass] = useState<string>("");

  // 2-2. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    if (src && typeof src === "string") {
      setFileName(
        src.split("/").pop()?.split(".")[0] || "empty"
      );
      setImgSrc(
        group !== "new"
        ? `${GCLOUD_URL}/${group || "main"}/${src}.${type || "webp"}`
        : src
      );
    }
    else {
      setFileName("empty");
      setImgSrc(`${GCLOUD_URL}/main/empty.${type || "webp"}`);
    }

    let newClass = "w-100p h-100p object-contain";

    if (props?.className) {
      newClass += ` ${props.className}`;
    }
    if (hover) {
      newClass += " hover";
    }
    if (shadow) {
      newClass += " shadow-2";
    }
    if (radius) {
      newClass += " radius-1";
    }
    if (border) {
      newClass += " border-1";
    }
    if (max) {
      newClass += ` w-max${max} h-max${(max * 2 / 3).toFixed(0)}`;
    }

    setImageClass(newClass);

  }, [group, src, props.className, hover, shadow, radius, max]);

  // 10. return ------------------------------------------------------------------------------------
  return (
    <img
      {...props}
      alt={fileName}
      key={fileName}
      src={imgSrc}
      loading={"lazy"}
      className={imageClass}
      onError={(e) => {
        e.currentTarget.src = `${GCLOUD_URL}/main/empty.webp`;
        e.currentTarget.alt = "empty";
      }}
    />
  );
};
