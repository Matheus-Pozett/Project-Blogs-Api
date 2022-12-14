const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);

    if (user.message) return res.status(user.status).json(user.result);

    return res.status(user.status).json(user.result);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
  const user = await userService.getAllUsers();

  return res.status(user.status).json(user.result);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    if (user.message) return res.status(user.status).json(user.result);
    
    return res.status(user.status).json(user.result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};