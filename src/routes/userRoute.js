const express = require('express');
const userController = require('../controllers/userController');
const userValidation = require('../middlewares/user');

const userRouter = express.Router();

userRouter.post('/', userValidation, userController.create);

module.exports = userRouter;