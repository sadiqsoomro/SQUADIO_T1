const { Schema, model } = require("mongoose");
const  Utils  = require("../utils/utils")
const CacheSchema = new Schema({
  key: String,
  value: {
    type: String,
    default: generateRandom = () => {
      return Utils.GenerateRandomString();
    }
  },
  ttl: { 
    type: Date, 
    default: ttl_timer = () => {
      return Utils.GenerateTTL();
    } 
  }
},
  {
    timestamps: true
  });

const Cache = model("Cache", CacheSchema);
module.exports = Cache