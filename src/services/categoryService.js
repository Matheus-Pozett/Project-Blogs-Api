const { Category } = require('../database/models');

const createCategories = async ({ name }) => {
  if (!name) {
    return { status: 400, result: { message: '"name" is required' } };
  }

  const create = await Category.create({ name });

  return { status: 201, result: create };
};

module.exports = { createCategories };