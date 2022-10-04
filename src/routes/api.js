const express = require('express');
const cacheRouter = require('./cache');
const config = require("../commons/config")
const router = express.Router();

const setRouter = (app) => {
  router.use(`/${config.apiVersion}`, cacheRouter);
  //this will be used to ping server through cron job since I am using heroku free dyno
  //and server goes idle after every 30 minutes :D
  app.get('/status', (req, res) => res.send('OK'));
};

module.exports = { setRouter };
