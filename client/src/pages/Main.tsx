// Main.jsx

import { useEffect } from "@importReacts";
import { useStoreLoading } from "@importHooks";
import { About } from "@importPages";
import { Hero } from "@importPages";
import { Portfolio } from "@importPages";
import { Skills } from "@importPages";
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
      <Hr className={"mb-20 bg-light h-10"} />
      <About />
      <Hr m={40} className={"bg-light h-10"} />
      <Skills />
      <Hr m={40} className={"bg-light h-10"} />
      <Portfolio />
    </>
  );
};