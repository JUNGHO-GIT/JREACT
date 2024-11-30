// portfoliosRepository.ts

import { Portfolios } from "@schemas/Portfolios";

// 2. detail ---------------------------------------------------------------------------------------
export const detail = async () => {
  const finalResult = await Portfolios.findOne(
    {
      portfolios_title: "Portfolios"
    }
  )
  .lean();

  return finalResult;
};