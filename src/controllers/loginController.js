const loginServices = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const user = await loginServices.login(req.body);

    if (user.message) return res.status(user.status).json(user.result);

    return res.status(user.status).json(user.result);
  } catch (e) {
    next(e);
  }
};

module.exports = { login };