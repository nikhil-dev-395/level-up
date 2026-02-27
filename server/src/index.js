require("dotenv").config();

const express = require("express");
const ENV = require("./utils/env");
const logger = require("./utils/logger");
const morgan = require("morgan");
const cors = require("cors");
const { default: helmet } = require("helmet");
const authRouter = require("./routes/auth.route");
const connectDB = require("./utils/connection");
const skillRouter = require("./routes/skill.route");
const internshipRouter = require("./routes/internship.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/auth", authRouter);
app.use("/api/skill", skillRouter);
app.use("/api/internship", internshipRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "ok" });
});

connectDB()
  .then(() => {
    app.listen(ENV.PORT, () => {
      logger.info("server is listening on " + ENV.PORT);
    });
  })
  .catch((err) => {
    logger.error(err?.message);
  });

module.exports = app;
