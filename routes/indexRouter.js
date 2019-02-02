const termRouter = require("./termRouter");
const express = require("express");

const indexRouter = express.Router();

// Register routes
indexRouter.use("/terms", termRouter);

module.exports = indexRouter;
