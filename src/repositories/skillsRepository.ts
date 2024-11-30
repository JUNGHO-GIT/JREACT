// skillsRepository.ts

import { Skills } from "@schemas/Skills";

// 2. detail ---------------------------------------------------------------------------------------
export const detail = async () => {
  const finalResult = await Skills.findOne(
    {
      skills_title: "Skills"
    }
  )
  .lean();

  return finalResult;
};