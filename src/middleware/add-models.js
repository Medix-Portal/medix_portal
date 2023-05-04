const User = require('../db/models/user');
const Doctor = require('../db/models/doctor');

const addModels = (req, res, next) => {
  req.db = {
    User, Doctor
  };
  next();
};

module.exports = addModels;
