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
  isExpired: { type: Boolean, default: false }
},
  {
    timestamps: true
  });

const Cache = model("Cache", CacheSchema);
module.exports = Cache