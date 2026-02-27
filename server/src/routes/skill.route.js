const { createSkill, getSkills, updateSkillProgress, createEnroll } = require("../controllers/skill.controller.js");

const router = require("express").Router();

router.post("/create", createSkill);
router.get("/get", getSkills);
router.put("/update", updateSkillProgress);
router.post("/enroll", createEnroll);
module.exports = router;
