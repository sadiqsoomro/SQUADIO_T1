require('dotenv').config();
module.exports = config = {
    nodeServicePort : process.env.NODE_SERVICE_PORT || 4000,
    authToken : process.env.AUTH_TOKEN || null,
    apiVersion : process.env.API_VERSION || "v1",
    dbUser : process.env.MONGO_DB_USER,
    dbPassword : process.env.MONGO_DB_PASS,
    dbName : process.env.MONGO_DB_DATABASE,
    dbCluster : process.env.MONGO_DB_CLUSTER,
    cacheTTL : process.env.MONGO_CACHE_TTL || 20,
    collectionLimit : process.env.MONGO_COLLECTION_LIMIT || 10
}