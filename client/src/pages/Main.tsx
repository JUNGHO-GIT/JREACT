// Main.jsx

import { useEffect } from "@importReacts";
import { useStoreLoading } from "@importHooks";
import { About } from "./main/About";
import { Hero } from "./main/Hero";
import { Portfolio } from "./main/Portfolio";
import { Skills } from "./main/Skills";
import { Hr } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Main = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { setLOADING } = useStoreLoading();

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
  }, []);

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      <Hero />
      <Hr className={"mt-20 mb-20 bg-light h-10"} />
      <About />
      <Hr className={"mt-20 mb-20 bg-light h-10"} />
      <Skills />
      <Hr className={"mt-20 mb-20 bg-light h-10"} />
      <Portfolio />
    </>
  );
};