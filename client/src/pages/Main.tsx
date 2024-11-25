// Main.jsx

import {useEffect} from "@importReacts";
import {useStoreLoading} from "@importHooks";
import {Br} from "@importComponents";
import {About, Hero, Portfolio, Skills} from "@importPages";

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
      <Br className={"my-3vh"} />
      <About />
      <Br className={"my-3vh"} />
      <Skills />
      <Br className={"my-3vh"} />
      <Portfolio />
    </>
  );
};