const { createSkill } = require("../controllers/skill.controller.js");

const router = require("express").Router();

router.post("/create", createSkill);

module.exports = router;
