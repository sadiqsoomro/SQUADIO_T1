const { ERROR_CODES } = require('../constants');
const {CustomError} = require('../utils/error');
const cacheModel = require("../schemas/cache")
const { cacheTTL } = require("../commons/config")
const  Utils  = require("../utils/utils")
class CacheService {
  static async getCache(cacheKey) {
      //check if TTL is valid number
      const ttl = Utils.isNumeric(cacheTTL)
      if(ttl == false) throw new CustomError(ERROR_CODES.INVALID_TTL);
      let response = null;
      response = await cacheModel.findOne({key:cacheKey});;
      if(response) console.log("Cache Hit");
      else {
        console.log("Cache Miss");
        const saveCache = new cacheModel({key:cacheKey});
        response = await saveCache.save();
      }
      return response.value;
  }
}

module.exports = CacheService;
