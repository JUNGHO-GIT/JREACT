// projectService.ts

import * as repository from "@repositories/projectsRepository";

// 2. detail ---------------------------------------------------------------------------------------
export const detail = async (
  project_id_param: string,
) => {

  // result 변수 선언
  let findResult: any = null;
  let finalResult: any = null;
  let statusResult: string = "fail";

  findResult = await repository.detail(
    project_id_param
  );

  if (!findResult) {
    statusResult = "fail";
    finalResult = null;
  }
  else {
    statusResult = "success";
    finalResult = findResult;
  }

  return {
    status: statusResult,
    result: finalResult,
  };
};