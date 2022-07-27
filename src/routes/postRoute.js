const express = require('express');
const authorization = require('../middlewares/auth');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.get('/', authorization, postController.getAll);
postRouter.get('/:id', authorization, postController.getById);

module.exports = postRouter;