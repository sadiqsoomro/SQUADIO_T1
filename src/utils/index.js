/**
 * Exporting all utills in  this folder
 */
const CustomError = require('./error');
const responseHandler = require('./response');
const MongoDB = require('./mongoose')
module.exports = {
  CustomError,
  ...responseHandler,
  MongoDB
};
