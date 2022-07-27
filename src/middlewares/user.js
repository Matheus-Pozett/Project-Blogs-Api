const usersSchemas = require('../schemas/userValidation');

const userValidation = (req, res, next) => {
  const { displayName, password, email } = req.body;

  const { error } = usersSchemas.validate({ displayName, password });
  const emailRegex = /\S+@\S+\.\S+/;

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

module.exports = userValidation;