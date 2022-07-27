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

module.exports = {
  create,
};