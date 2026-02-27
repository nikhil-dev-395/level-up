const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema(
  {
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    progress: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true },
);

const Enroll = mongoose.model("Enroll", enrollSchema);

module.exports = User;
