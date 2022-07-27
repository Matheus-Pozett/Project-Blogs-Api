const { User } = require('../database/models');
const jwt = require('../helpers/tokenJwtGenerator');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  
  if (!email || !password) {
    return { status: 400, result: { message: 'Some required fields are missing' } };
  }

  if (!user) {
    return { status: 400, result: { message: 'Invalid fields' } };
  }
  const token = jwt({ email });
  
  return { status: 200, result: { token } };
};

module.exports = { login };