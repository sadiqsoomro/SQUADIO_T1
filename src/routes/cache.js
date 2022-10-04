const express = require('express');
const { CacheController } = require('../controllers');

const cacheRouter = express.Router();
const authMiddleware  = require('../middlewares/auth');

cacheRouter.get('/cache/:cacheKey', authMiddleware.authMiddleware, CacheController.getCache);
module.exports = cacheRouter;
