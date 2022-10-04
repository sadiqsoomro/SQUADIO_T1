const cacheRouter = require('./cache');

const setRouter = (app) => {
  cacheRouter(app);
  //this will be used to ping server through cron job since I am using heroku free dyno
  //and server goes idle after every 30 minutes :D
  app.get('/status', (req, res) => res.send('OK'));
};

module.exports = { setRouter };
