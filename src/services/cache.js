const { ERROR_CODES } = require('../constants');
const { CustomError } = require('../utils/error');
const cacheModel = require("../schemas/cache")
const { cacheTTL } = require("../commons/config")
const Utils = require("../utils/utils")
class CacheService {
  static async getCache(cacheKey) {
    //check if TTL is valid number
    const ttl = Utils.isNumeric(cacheTTL)
    if (ttl == false) throw new CustomError(ERROR_CODES.INVALID_TTL);
    let response = null;
    response = await cacheModel.findOne({ key: cacheKey });
    if (!response || !Utils.IsCacheValid(response.ttl)) {
      console.log("Cache Miss");
      const randomString = Utils.GenerateRandomString();
      response = await cacheModel.findOneAndUpdate(
        { key: cacheKey },
        {
          ttl: Utils.GenerateTTL(),
          value: randomString
        },
        { upsert: true }
      );
      return randomString;
    } else {
      response = await cacheModel.findOneAndUpdate({ key: cacheKey }, { ttl: Utils.GenerateTTL() });
      console.log("Cache Hit");
      return response.value;
    }
  }
}

module.exports = CacheService;
