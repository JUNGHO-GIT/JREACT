// projectRepository.ts

import { Project } from "@schemas/Project";

// 2. detail ---------------------------------------------------------------------------------------
export const detail = async (
  project_id_param: string,
) => {

  // result 변수 선언
  let findResult: any = null;
  let finalResult: any = null;
  let statusResult: string = "fail";

  findResult = await Project.findOne(
    {
      project_id: project_id_param
    }
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
) => {
  const finalResult = await Project.create(
    {
      project_id: OBJECT_param.project_id,
      project_title: OBJECT_param.project_title,
      project_section: OBJECT_param.project_section,
      project_regDt: new Date(),
      project_updateDt: null,
    },
  );

  return finalResult;
};

// 4. update ---------------------------------------------------------------------------------------
export const update = async (
  _id_param: string,
  OBJECT_param: any,
) => {
  const finalResult = await Project.findOneAndUpdate(
    {
      _id: _id_param
    },
    {
      $set: {
        project_title: OBJECT_param.project_title,
        project_section: OBJECT_param.project_section,
        project_updateDt: new Date(),
      }
    },
    {
      upsert: true,
      new: true
    }
  )
  .lean();

  return finalResult;
};

// 5. delete ---------------------------------------------------------------------------------------
export const deletes = async (
  _id_param: string,
) => {
  const finalResult = await Project.findOneAndDelete(
    {
      _id: _id_param
    }
  )
  .lean();

  return finalResult;
};
