const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./commons/config');

process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection Details::${err}`)
});
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception Details::${err}`)
});

const app = express();
app.server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.server.listen(config.nodeServicePort, () => {
    console.info(`Started server on => http://localhost:${app.server.address().port}`);
});

module.exports = app;