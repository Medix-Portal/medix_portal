const User = require('../db/models/user');
const Doctor = require('../db/models/doctor');
const Appointment = require('../db/models/appointment');

const addModels = (req, res, next) => {
  req.db = {
    User, 
    Doctor,
    Appointment,
  };
  next();
};

module.exports = addModels;
