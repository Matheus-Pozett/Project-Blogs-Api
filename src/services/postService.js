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

const getPostById = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { 
        model: Category, as: 'categories', attributes: { exclude: ['PostCategories'] },
      },
  ],
  });

  if (!postId) {
    return { status: 404, result: { message: 'Post does not exist' } };
  }

  return { status: 200, result: postId };
};

module.exports = {
  getAllPost,
  getPostById,
};