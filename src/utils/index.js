/**
 * Exporting all utills in  this folder
 */
const CustomError = require('./error');
const responseHandler = require('./response');

module.exports = {
  CustomError,
  ...responseHandler
};
