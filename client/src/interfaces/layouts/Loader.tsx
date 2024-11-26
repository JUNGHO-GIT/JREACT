// Loader.tsx

import { useStoreLoading } from "@importHooks";
import { Div } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Loader = () => {

  // 1. common -------------------------------------------------------------------------------------
  const { LOADING } = useStoreLoading();

  // 7.loader --------------------------------------------------------------------------------------
  const loaderNode = () => (
    LOADING ? (
      <Div className={"loader-wrapper"}>
        <Div className={"loader"} />
      </Div>
    ) : (
      <Div />
    )
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {loaderNode()}
    </>
  );
};