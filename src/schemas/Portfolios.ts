// Portfolios.ts

import mongoose from "mongoose";
import { incrementSeq } from "@schemas/Counter";

// -------------------------------------------------------------------------------------------------
const schema = new mongoose.Schema(
  {
    portfolios_number : {
      type : Number,
      default: 1,
      unique : true
    },

    // portfolios
    portfolios_title: {
      type: String,
      default: "",
      required: false
    },
    portfolios_section: [
      {
        portfolios_section_id: {
          type: String,
          default: "",
          required: false
        },
        portfolios_section_name: {
          type: String,
          default: "",
          required: false
        },
        portfolios_section_desc: {
          type: String,
          default: "",
          required: false
        },
        portfolios_section_icon: {
          type: String,
          default: "",
          required: false
        },
        portfolios_section_img: {
          type: String,
          default: "",
          required: false
        }
      }
    ],

    portfolios_regDt: {
      type: Date,
      default: Date.now,
      required: false
    },
    portfolios_updateDt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
  {
    collection: "Portfolios",
    timestamps: {
      createdAt: "portfolios_regDt",
      updatedAt: "portfolios_updateDt"
    },
  }
);

// 3. counter --------------------------------------------------------------------------------------
schema.pre("save", async function(next) {
  if (this.isNew) {
    this.portfolios_number = await incrementSeq("portfolios_number", "Portfolios");
  }
  next();
});

// 5. model ----------------------------------------------------------------------------------------
export const Portfolios = mongoose.model(
  "Portfolios", schema
);