const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  password: Joi.string().min(6).required()
  .messages({
    'string.min': '400|"password" length must be at least 6 characters long',
  }),
});