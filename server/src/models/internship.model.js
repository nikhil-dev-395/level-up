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
    contactEmail: {
      type: String,
      min: 7,
      max: 200,
    },
    category: {
      type: String,
      min: 1,
      max: 100,
      enum: ["programming", "design", "marketing", "other"],
      default: "programming",
    },
  },
  { timestamps: true },
);

const Internship = mongoose.model("Internship", internshipSchema);

module.exports = Internship;
