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
    const { category } = req.query;

    const skills = await Skill.find(category ? { category } : {})
      .sort({ createdAt: -1 })
      .lean();

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

exports.updateSkillProgress = async (req, res) => {
  try {
    const { enrollId } = req.params;
    const { progress } = req.body;

    if (!progress) {
      return res.status(400).json({
        message: "progress is required",
        success: false,
        data: null,
      });
    }

    await Enroll.findByIdAndUpdate(enrollId, { progress });

    return res.status(200).json({
      message: "skill progress updated successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};

exports.createEnroll = (req, res) => {
  try {
    const { skillId } = req.params;
    const { userId } = req.body;

    if (!skillId) {
      return res.status(400).json({
        message: "skillId is required",
        success: false,
        data: null,
      });
    }

    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
        success: false,
        data: null,
      });
    }

    const enroll = new Enroll({ skillId, userId });

    enroll.save();

    return res.status(200).json({
      message: "enrolled successfully",
      success: true,
      data: enroll,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
      data: null,
    });
  }
};
