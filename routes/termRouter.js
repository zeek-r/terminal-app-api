const express = require("express");
const termRouter = express.Router();
const termHandler = require("../handlers/termHandler");

termRouter.get("/process", termHandler.getOutput);

module.exports = termRouter;
