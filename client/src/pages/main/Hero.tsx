// Hero.jsx

import { useState, useRef, useEffect } from "@importReacts";
import { Typed } from "@importLibs";
import { Div, Img } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Hero = () => {

  // 2-1. useState ---------------------------------------------------------------------------------
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [OBJECT, _setOBJECT] = useState<any>({
    title: "JUNGHO MUN",
    sub: [
      "Java, Spring, React, TypeScript, JavaScript, HTML, CSS",
    ],
  });

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    const typed = typedRef.current;
    if (typed) {
      const typedStrings = typed.getAttribute("data-typed-items")?.split(",");
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      typedInstance.current = new Typed(typed, {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        cursorChar: "|",
      });
    }
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  // -----------------------------------------------------------------------------------------------
  return (
    <Paper className={"main-wrapper p-0"}>
      <Grid container={true} spacing={0}>
        <Grid size={12} className={"d-center p-relative"}>
          <Img
            hover={false}
            shadow={false}
            radius={false}
            src={"main2"}
          />
          <Div className={"p-absolute"}>
            <Div className={"fs-2-0rem fw-700 white mb-10"}>
              {OBJECT.title}
            </Div>
            <Div className={"fs-1-6rem fw-400 white"}>
              <span
                ref={typedRef}
                data-typed-items={OBJECT.sub}
              />
            </Div>
          </Div>
        </Grid>
      </Grid>
    </Paper>
  );
};