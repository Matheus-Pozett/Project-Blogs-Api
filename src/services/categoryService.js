const { Category } = require('../database/models');

const createCategories = async ({ name }) => {
  if (!name) {
    return { status: 400, result: { message: '"name" is required' } };
  }

  const create = await Category.create({ name });

  return { status: 201, result: create };
};

const getAllCategories = async () => {
    const getAll = await Category.findAll();
  
  return { status: 200, result: getAll };
};

module.exports = { 
  createCategories,
  getAllCategories,
};