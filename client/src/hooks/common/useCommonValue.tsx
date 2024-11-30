// useCommonValue.tsx

import { useLocation, useNavigate } from "@importReacts";

// -------------------------------------------------------------------------------------------------
export const useCommonValue = () => {

  // location
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const location_id: string = location?.state?._id;
  const location_category: string = location?.state?.category;
  const PATH: string = location?.pathname;
  const firstStr: string = PATH?.split("/")[1] || "";
  const secondStr: string = PATH?.split("/")[2] || "";
  const thirdStr: string = PATH?.split("/")[3] || "";

  // env
  const TITLE = process.env.REACT_APP_TITLE || "";
  const URL = process.env.REACT_APP_SERVER_URL || "";
  const SUBFIX = process.env[`REACT_APP_${firstStr.toUpperCase()}_URL`] || "";
  const GCLOUD_URL = process.env.REACT_APP_GCLOUD_URL || "";
  const PROJECTS_URL = process.env.REACT_APP_PROJECTS_URL || "";
  const ABOUT_URL = process.env.REACT_APP_ABOUT_URL || "";
  const SKILLS_URL = process.env.REACT_APP_SKILLS_URL || "";
  const PORTFOLIOS_URL = process.env.REACT_APP_PORTFOLIOS_URL || "";

  // -----------------------------------------------------------------------------------------------
  return {
    navigate,
    location,
    location_id,
    location_category,
    PATH,
    firstStr,
    secondStr,
    thirdStr,
    TITLE,
    URL,
    SUBFIX,
    GCLOUD_URL,
    PROJECTS_URL,
    ABOUT_URL,
    SKILLS_URL,
    PORTFOLIOS_URL,
  };
};