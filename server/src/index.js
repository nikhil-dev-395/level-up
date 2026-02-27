const express = require("express");
const ENV = require("./utils/env");
const logger = require("./utils/logger");
const app = express();

app.listen(ENV.PORT, () => {
  logger.info("server is listening on " + ENV.PORT);
});
