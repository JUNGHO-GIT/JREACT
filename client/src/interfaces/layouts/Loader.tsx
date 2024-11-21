// Loader.tsx

import { useEffect } from "@importReacts";
import { useStoreLoading } from "@importHooks";
import { Div } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Loader = () => {

  // 1. common -------------------------------------------------------------------------------------
  const { LOADING, setLOADING } = useStoreLoading();

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setLOADING(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLOADING]);

  // 7.loader --------------------------------------------------------------------------------------
  const loaderNode = () => (
    <Div className={LOADING ? "loader-wrapper" : "d-none"}>
      {LOADING && <Div className="loader" />}
    </Div>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {loaderNode()}
    </>
  );
};