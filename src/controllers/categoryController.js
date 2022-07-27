const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const categories = await categoryService.createCategories(req.body);

    if (categories.message) { return res.status(categories.status).json(categories.result); }

    return res.status(categories.status).json(categories.result);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
  
    return res.status(categories.status).json(categories.result);
  } catch (e) {
    next(e);
  }
};

module.exports = { 
  create,
  getAll,
};