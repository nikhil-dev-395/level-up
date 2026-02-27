exports.createSkill = async (req, res) => {
  try {
    const { url, duration, title, provider, teacher, category } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "url is required",
        success: false,
        data: null,
      });
    }

    if (!duration) {
      return res.status(400).json({
        message: "duration is required",
        success: false,
        data: null,
      });
    }

    if (!title) {
      return res.status(400).json({
        message: "title is required",
        success: false,
        data: null,
      });
    }
    if (!provider) {
      return res.status(400).json({
        message: "provider is required",
        success: false,
        data: null,
      });
    }
    if (!teacher) {
      return res.status(400).json({
        message: "teacher is required",
        success: false,
        data: null,
      });
    }

    const skill = new Skill({
      url,
      duration,
      title,
      provider,
      teacher,
      category,
    });

    await skill.save();

    return res.status(200).json({
      message: "skill created successfully",
      success: true,
      data: skill,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    return res.status(200).json({
      message: "skills fetched successfully",
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
