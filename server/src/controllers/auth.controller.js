const signIn = (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ message: "user logged in successfully", success: true });
  } catch (error) {
    next(error);
  }
};
