// Project.ts

import mongoose from "mongoose";
import { incrementSeq } from "@schemas/Counter";

// -------------------------------------------------------------------------------------------------
const schema = new mongoose.Schema(
  {
    project_number : {
      type : Number,
      default: 1,
      unique : true
    },

    project_id: {
      type: String,
      default: "",
      required: false
    },

    project_section: [
      {
        project_section_title: {
          type: String,
          default: "",
          required: false
        },
        project_section_contents: [
          {
            project_contents_title: {
              type: String,
              default: "",
              required: false
            },
            project_contents_detail: [
              {
                project_detail_icon: {
                  type: String,
                  default: "",
                  required: false
                },
                project_detail_value: {
                  type: String,
                  default: "",
                  required: false
                }
              }
            ]
          }
        ]
      }
    ],

    project_regDt: {
      type: Date,
      default: Date.now,
      required: false
    },
    project_updateDt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
  {
    collection: "Project",
    timestamps: {
      createdAt: "project_regDt",
      updatedAt: "project_updateDt"
    },
  }
);

// 3. counter --------------------------------------------------------------------------------------
schema.pre("save", async function(next) {
  if (this.isNew) {
    this.project_number = await incrementSeq("project_number", "Project");
  }
  next();
});

// 5. model ----------------------------------------------------------------------------------------
export const Project = mongoose.model(
  "Project", schema
);