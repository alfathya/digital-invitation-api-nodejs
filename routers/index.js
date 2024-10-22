const express = require('express');

const Router = express.Router();

const UserRouter = require("./user");
const CommentRouter = require("./comment");

Router.use("/user", UserRouter);
Router.use("/comment", CommentRouter);

// Simple route
Router.get("/", (req, res) => {
  res.send("Welcome to the Digital Invitation API");
});

module.exports = Router;