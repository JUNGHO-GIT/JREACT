// Skills.ts

import mongoose from "mongoose";
import { incrementSeq } from "@schemas/Counter";

// -------------------------------------------------------------------------------------------------
const schema = new mongoose.Schema(
  {
    skills_number : {
      type : Number,
      default: 1,
      unique : true
    },

    // skills
    skills_title: {
      type: String,
      default: "",
      required: false
    },
    skills_section: [
      {
        skills_section_img: {
          type: String,
          default: "",
          required: false
        },
        skills_section_value: {
          type: String,
          default: "",
          required: false
        },
        skills_section_sub: [
          {
            skills_section_sub_icon: {
              type: String,
              default: "",
              required: false
            },
            skills_section_sub_value: {
              type: String,
              default: "",
              required: false
            }
          }
        ]
      }
    ],

    skills_regDt: {
      type: Date,
      default: Date.now,
      required: false
    },
    skills_updateDt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
  {
    collection: "Skills",
    timestamps: {
      createdAt: "skills_regDt",
      updatedAt: "skills_updateDt"
    },
  }
);

// 3. counter --------------------------------------------------------------------------------------
schema.pre("save", async function(next) {
  if (this.isNew) {
    this.skills_number = await incrementSeq("skills_number", "Skills");
  }
  next();
});

// 5. model ----------------------------------------------------------------------------------------
export const Skills = mongoose.model(
  "Skills", schema
);