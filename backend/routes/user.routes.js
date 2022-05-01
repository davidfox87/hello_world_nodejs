module.exports = app => {
  const users = require("../controllers/user.controller.js")

  const router = require('express').Router();

  // Create a new user table when the app is started (if the table doesn't already exist)
  router.post("/", users.create); 
  
  app.use('/api/users', router);

  };