// Main.jsx

import { useState, useEffect } from "@importReacts";
import { useCommonValue, useStoreLoading } from "@importHooks";
import { axios } from "@importLibs";
import { Hr, Br } from "@importComponents";
import { About, Hero, Portfolio, Skills } from "@importPages";

// -------------------------------------------------------------------------------------------------
export const Main = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { setLOADING } = useStoreLoading();

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
    setTimeout(() => {
      setLOADING(false);
    }, 500);
  }, []);

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      <Hero />
      <Br className={"my-4vh"} />
      <About />
      <Br className={"my-4vh"} />
      <Skills />
      <Br className={"my-4vh"} />
      <Portfolio />
    </>
  );
};