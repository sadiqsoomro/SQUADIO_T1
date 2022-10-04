const {Schema,model} = require("mongoose");

const CacheSchema = new Schema({
  key: String,
  value: String,
  isExpired : { type: Boolean, default: false}
},
{
  timestamps: true
});

const Cache = model("Cache", CacheSchema);
module.exports = Cache