const schema = require('../schemas/user');

module.exports = (data) => (
  schema.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  }).value
);
