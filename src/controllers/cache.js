const { responseHandler } = require('../utils');
const { SUCCESS_CODES } = require('../constants');
const CacheService = require('../services/cache');
 
class CacheController { 
  static async getCache(req, res, next) {
    try {
      const { cacheKey } = req.params;
      const result = await CacheService.getCache(cacheKey);
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
