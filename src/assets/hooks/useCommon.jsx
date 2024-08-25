// useCommon.jsx

import { useLocation, useNavigate } from "../../import/ImportReacts.jsx";

// -------------------------------------------------------------------------------------------------
export const useCommon = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const PATH = location?.pathname;

  return {
    navigate, location,
  };
};