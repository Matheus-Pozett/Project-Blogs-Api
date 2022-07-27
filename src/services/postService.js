const { BlogPost, User, Category } = require('../database/models');

const getAllPost = async () => {
  const getAll = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { 
        model: Category, as: 'categories', attributes: { exclude: ['PostCategories'] },
      },
    ],
  });

  return { status: 200, result: getAll };
};

module.exports = {
  getAllPost,    
};