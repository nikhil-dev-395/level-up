const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      min: 5,
    },
    duration: {
      type: String,
      default: "0",
    },
    title: {
      type: String,
      min: 3,
      max: 1000,
    },
    provider: {
      type: String,
      min: 7,
      max: 200,
      enum: ["youtube", "udemy", "coursera", "edx", "other"],
      default: "youtube",
    },
    teacher: {
      type: String,
      min: 1,
      max: 500,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("Skill", skillsSchema);

module.exports = User;
