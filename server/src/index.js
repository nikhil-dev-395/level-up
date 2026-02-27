const express = require("express");
const ENV = require("./utils/env");
const logger = require("./utils/logger");
const app = express();

app.use((err, req, res, next) => {
  logger.error(err);
  const statusCode = err?.statusCode || 500;
  const errorMessage = err?.message || "Internal Server Error";
  res
    .status(statusCode)
    .json({ error: errorMessage, success: false, data: null });
});

app.listen(ENV.PORT, () => {
  logger.info("server is listening on " + ENV.PORT);
});
