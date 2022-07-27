const postServices = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const posts = await postServices.getAllPost();
  
    return res.status(posts.status).json(posts.result);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postServices.getPostById(id);
    
    if (post.message) return res.status(post.status).json(post.result);
  
    return res.status(post.status).json(post.result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
};