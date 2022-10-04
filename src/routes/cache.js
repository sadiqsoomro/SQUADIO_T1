const { CacheController } = require('../controllers');
const authMiddleware  = require('../middlewares/auth');
const config = require("../commons/config")

module.exports = cacheRouter = (app)  => {
    app.get(`/${config.apiVersion}/cache/:cacheKey`, authMiddleware, CacheController.getCache);

};
