
const mongoose = require("mongoose");
const config = require("../commons/config")
const connectMongoDB = async () => {
    const mongoDB = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbCluster}/${config.dbName}?retryWrites=true&w=majority`;
    try{    
        await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        return true;
    }catch(error){
        console.log("Mongo Db ERROR: "+ error.message);
        return false;
    }
};

module.exports = { connectMongoDB };
