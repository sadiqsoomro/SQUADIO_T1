const { responseHandler } = require('../utils');
const { SUCCESS_CODES } = require('../constants');

class CacheController { 
  static async getCache(req, res, next) {
    try {
      const { cacheKey } = req.params;
      const result = null;// Add service here
      return responseHandler({
        response: res,
        ...SUCCESS_CODES.DEFAULT,
        result,
        isSuccess: true,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CacheController;
