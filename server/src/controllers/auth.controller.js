const User = require("../models/user.model");
const logger = require("../utils/logger");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ message: "email is required", success: false, data: null });
    }

    if (!password) {
      return res
        .status(400)
        .json({ message: "password is required", success: false, data: null });
    }

    let user = await User.findOne({ email, password });

    if (!user) {
      user = await User.create({ email, password });
    }
    logger.info({ user }, "user logged in successfully");

    return res.status(200).json({
      message: "user logged in successfully",
      success: true,
      data: { userId: user._id, email: user.email },
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};

module.exports = { signIn };
