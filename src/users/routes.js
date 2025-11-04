const express = require("express");
const { validationMiddleware } = require("./middleware");
const { create } = require("./controllers");

const usersRoutes = express.Router();

usersRoutes.post("/", validationMiddleware, create);

module.exports = { usersRoutes };
