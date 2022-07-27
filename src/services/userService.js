const { User } = require('../database/models');
const jwt = require('../helpers/tokenJwtGenerator');

const createUser = async ({ displayName, email, password, image }) => {
  const findUser = await User.findAll();
  
  const checkExistemail = findUser.some((data) => data.email === email);

  if (checkExistemail) {
    return { status: 409, result: { message: 'User already registered' } };
  }
  
  await User.create({ displayName, email, password, image });

  const token = jwt({ displayName, email, password, image });

  return { status: 201, result: { token } };
};

const getAllUsers = async () => {
  const getAll = await User.findAll({ attributes: { exclude: ['password'] } });

  return { status: 200, result: getAll };
};

module.exports = { 
  createUser,
  getAllUsers,
};