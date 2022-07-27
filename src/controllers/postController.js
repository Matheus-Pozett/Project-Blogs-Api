const postServices = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const posts = await postServices.getAllPost();
  
    return res.status(posts.status).json(posts.result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
};