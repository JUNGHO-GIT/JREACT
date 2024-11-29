// projectService.ts

import { uploadCloud } from "@assets/scripts/upload";
import * as repository from "@repositories/projectRepository";

const title = "project";

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

// 3. save -----------------------------------------------------------------------------------------
export const save = async (
  OBJECT_param: any,
  fileList_param: any,
) => {

  // result 변수 선언
  let saveResult: any = null;
  let finalResult: any = null;
  let statusResult: string = "fail";

  saveResult = await repository.save(
    OBJECT_param
  );

  if (!saveResult) {
    statusResult = "fail";
    finalResult = null;
  }
  else {
    statusResult = "success";
    finalResult = saveResult;
  }

  return {
    status: statusResult,
    result: finalResult,
  };
};

// 4. update ---------------------------------------------------------------------------------------
export const update = async (
  _id_param: string,
  OBJECT_param: any,
  fileList_param: any,
) => {

  // result 변수 선언
  let updateResult: any = null;
  let finalResult: any = null;
  let statusResult: string = "fail";

  updateResult = await repository.update(
    _id_param, OBJECT_param
  );

  if (!updateResult) {
    statusResult = "fail";
    finalResult = null;
  }
  else {
    statusResult = "success";
    finalResult = updateResult;
  }

  return {
    status: statusResult,
    result: finalResult,
  };
};

// 5. delete ---------------------------------------------------------------------------------------
export const deletes = async (
  _id_param: string,
) => {

  // result 변수 선언
  let deleteResult: any = null;
  let finalResult: any = null;
  let statusResult: string = "fail";

  deleteResult = await repository.deletes(
    _id_param
  );

  if (!deleteResult) {
    statusResult = "fail";
    finalResult = null;
  }
  else {
    statusResult = "success";
    finalResult = deleteResult;
  }

  return {
    status: statusResult,
    result: finalResult,
  };
};