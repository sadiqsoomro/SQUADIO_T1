const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./commons/config');
const { setRouter } = require('./routes/api');
const { globalErrorHandler } = require('./utils/response');
const { MongoDB } = require('./utils');

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
setRouter(app);

// Added Global Error handler as middleware
app.use((err, req, res, next) => globalErrorHandler(err, req, res, next));

app.server.listen(process.env.PORT || 4000, async () => {
    console.info(`Started server on => http://localhost:${app.server.address().port}`);
    const connectDatabase = await MongoDB.connectMongoDB();
    if(!connectDatabase){
        console.error("Something went wrong while connecting to database.")
        app.server.close();
        return;
    } 
    console.log("Database connected successfully")
});