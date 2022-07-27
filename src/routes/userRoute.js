const express = require('express');
const userController = require('../controllers/userController');
const userValidation = require('../middlewares/user');
const authorization = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.post('/', userValidation, userController.create);
userRouter.get('/', authorization, userController.getAll);

module.exports = userRouter;