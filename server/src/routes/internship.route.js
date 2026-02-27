const {
  createInternship,
  getInternship,
} = require("../controllers/internship.controller.js");

const router = require("express").Router();

router.post("/create", createInternship);
router.get("/get", getInternship);

module.exports = router;
