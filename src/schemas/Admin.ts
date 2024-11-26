// Admin.ts

import mongoose from "mongoose";
import { incrementSeq } from "@schemas/Counter";

// -------------------------------------------------------------------------------------------------
const schema = new mongoose.Schema(
  {
    admin_number : {
      type : Number,
      default: 1,
      unique : true
    },

    admin_date: {
      type: String,
      default: "",
      required: false
    },
    adminSection: [
      {
        _id: false,
        admin_visit_ip: {
          type: String,
          default: "",
          required: false
        },
      }
    ],
    admin_regDt: {
      type: Date,
      default: Date.now,
      required: false
    },
    admin_updateDt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
  {
    collection: "Admin",
    timestamps: {
      createdAt: "admin_regDt",
      updatedAt: "admin_updateDt"
    },
  }
);

// 3. counter --------------------------------------------------------------------------------------
schema.pre("save", async function(next) {
  if (this.isNew) {
    this.admin_number = await incrementSeq("admin_number", "Admin");
  }
  next();
});

// 5. model ----------------------------------------------------------------------------------------
export const Admin = mongoose.model(
  "Admin", schema
);