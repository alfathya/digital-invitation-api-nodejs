'use strict'

const userRouter = require('express').Router()
const UserController = require('../controllers/user')

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/register", UserController.register);

module.exports = userRouter;