const path = require('path');

const express = require('express');
const userController = require('./controllers/user');
const doctorController = require('./controllers/doctors');
const appointmentController = require('./controllers/appointments');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');
const { router } = require('./server');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);
Router.post('/appointments', appointmentController.create);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);

//Reading doctors
Router.get('/doctors', doctorController.list);
Router.get('/doctors/:id', doctorController.find);

Router.get('/appointments', appointmentController.list);
Router.get('/appointments/:id', appointmentController.find);

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/appointments/:id', appointmentController.update);

// Delete
Router.delete('/users/logout', userController.logout);
Router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = Router;
