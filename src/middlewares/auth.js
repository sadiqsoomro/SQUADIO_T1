const { CustomError } = require('../utils');
const { ERROR_CODES } = require('../constants');
const { authToken } = require('../commons/config')
module.exports = authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) throw new CustomError(ERROR_CODES.AUTH_TOKEN_NOT_FOUND);
        const tokens = req.headers.authorization.replace(/^\s+|\s+$/g, "").split(' ');
        if (tokens && tokens.length > 0 && tokens[0].toLowerCase() === 'bearer' && tokens[1] && tokens[1] !== 'null') {
            if (tokens[1] === authToken) next();
            else throw new CustomError(ERROR_CODES.UNAUTHORIZED_ACCESS);
        } else throw new CustomError(ERROR_CODES.UNAUTHORIZED_ACCESS);
    } catch (error) {
        next(error);
    }
};

