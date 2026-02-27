exports.createInternship = async (req, res) => {
  try {
    const {
      designation,
      company,
      description,
      location,
      isVerified,
      isPaid = false,
      minAge = 18,
    } = req.body;

    if (!designation) {
      return res.status(400).json({
        message: "designation is required",
        success: false,
        data: null,
      });
    }

    if (!company) {
      return res.status(400).json({
        message: "company is required",
        success: false,
        data: null,
      });
    }

    if (!description) {
      return res.status(400).json({
        message: "description is required",
        success: false,
        data: null,
      });
    }
    if (!location) {
      return res.status(400).json({
        message: "location is required",
        success: false,
        data: null,
      });
    }
    if (!isVerified) {
      return res.status(400).json({
        message: "isVerified is required",
        success: false,
        data: null,
      });
    }

    const internship = new Internship({
      designation,
      company,
      description,
      location,
      isVerified,
      isPaid,
      minAge,
    });

    await internship.save();

    return res.status(200).json({
      message: "internship created successfully",
      success: true,
      data: internship,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};

exports.getInternship = async (req, res) => {
  try {
    const { category } = req.query;

    const skills = await Internship.find(category ? { category } : {})
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      message: "internships fetched successfully",
      success: true,
      data: skills,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};
