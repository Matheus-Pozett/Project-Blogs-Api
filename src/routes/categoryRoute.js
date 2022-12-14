const express = require('express');
const categoryController = require('../controllers/categoryController');
const authorization = require('../middlewares/auth');

const categoryRouter = express.Router();

categoryRouter.post('/', authorization, categoryController.create);
categoryRouter.get('/', authorization, categoryController.getAll);

module.exports = categoryRouter;