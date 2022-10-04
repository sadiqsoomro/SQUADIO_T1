require('dotenv').config();
module.exports = config = {
    nodeServicePort : process.env.NODE_SERVICE_PORT || 4000,
    authToken : process.env.AUTH_TOKEN || null,
    apiVersion : process.env.API_VERSION || "v1"
}