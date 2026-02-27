const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    designation: {
      type: String,
      min: 5,
    },
    company: {
      type: String,
      default: "0",
    },
    description: {
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
    location: {
      type: String,
      min: 1,
      max: 500,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
    minAge: {
      type: Number,
      default: 18,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("Internship", internshipSchema);

module.exports = User;
