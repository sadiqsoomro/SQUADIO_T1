const { ERROR_CODES } = require('../constants');
const { CustomError } = require('../utils/error');
const cacheModel = require("../schemas/cache")
const { cacheTTL,collectionLimit } = require("../commons/config")
const Utils = require("../utils/utils")
class CacheService {
  static async getCache(cacheKey) {
    //check if TTL is valid number or return error
    const ttl = Utils.isNumeric(cacheTTL)
    if (ttl == false) throw new CustomError(ERROR_CODES.INVALID_TTL);
    //check if record limit is valid number or return error
    const limit = Utils.isNumeric(collectionLimit)
    if (limit == false) throw new CustomError(ERROR_CODES.INVALID_COLLECTION_LIMIT);

    let response = null;
    //find and check if key already exists
    response = await cacheModel.findOne({ key: cacheKey });
    //if it doesnt exists or if cache is expired, its CACHE MISS
    if (!response || !Utils.IsCacheValid(response.ttl)) {
      console.log("Cache Miss");
      //if the key we are about to create does not exists, check if we have hit the limit
      if(!response){
        const recordCount = await cacheModel.countDocuments({});
        let getOldestRecord = null;
        //check limit and current records
        if(limit == recordCount){
          //get the oldest record available as per updatedAt (least used record)
          getOldestRecord  = await cacheModel.findOne().sort({ updatedAt: 1 });
          //delete it
          await cacheModel.deleteOne({ key: getOldestRecord.key });
        }
      }
      
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
      // else its cache hit, update the TTL
      response = await cacheModel.findOneAndUpdate({ key: cacheKey }, { ttl: Utils.GenerateTTL() });
      console.log("Cache Hit");
      return response.value;
    }
  }
}

module.exports = CacheService;
