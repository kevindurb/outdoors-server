const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number().integer(),
  username: Joi.string(),
  password: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
});
