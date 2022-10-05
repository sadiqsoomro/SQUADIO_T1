module.exports = {
    UNAUTHORIZED_ACCESS: {
        code: 403,
        message: 'Authorization token is invalid',
    },
    AUTH_TOKEN_NOT_FOUND: {
        code: 401,
        message: 'Authorization token not found.',
    },
    INVALID_TTL: {
        code: 400,
        message: 'CACHE TTL is invalid positive number.',
    },
    INVALID_COLLECTION_LIMIT: {
        code: 400,
        message: 'Collection limit is invalid positive number.',
    },
};