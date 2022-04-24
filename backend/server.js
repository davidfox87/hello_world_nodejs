'use strict';
require('rootpath')();
//DotEnv is a lightweight npm package that automatically 
//loads environment variables from a .env file into the process.env object.

//Accessing your variables is super easy! They are attached to the process.env object,
// so you can access them using the pattern process.env.KEY.  
require('dotenv').config(); 

const express = require('express');
const app = express();

const PORT = 4000;
const HOST = '0.0.0.0';

app.get('/service2', (req, res) => {
  res.send('Hello, from service2 root');
});

app.get('/service2/hello', (req, res) => {
  res.send('Hello, from service2/hello');
});

const host = process.env.REACT_APP_SERVER_URL
const port = process.env.NODE_ENV === 'production' ? process.env.SERVER_PORT : 4000;

app.listen(PORT, HOST);
console.log(`Running on ${host}:${port}`);