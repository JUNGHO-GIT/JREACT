// Loader.tsx

import { Div } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Loader = () => {

  // 7.loader --------------------------------------------------------------------------------------
  const loaderNode = () => {

    const initLoader = () => (
      <Div className={"h-min100vh d-col-center"}>
        <Div className={"loader"} />
      </Div>
    );

    return (
      initLoader()
    );
  };

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {loaderNode()}
    </>
  );
};