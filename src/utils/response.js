const CustomError = require('./error');

const responseHandler = (data) => {
    const {
        response, message, result, code = 200, errors = null, isSuccess = true,
    } = data;
    return response.status(code).json({
        code,
        errors,
        message,
        result,
        isSuccess,
    });
};

const globalErrorHandler = (err, request, response, next) => {
    if (!(err instanceof CustomError)) {
        if (err instanceof Error) {
            err = new CustomError({
                message: err.message,
            });
        }
    }
    console.error('error', `URL: ${request.url}`, { meta: { error: originalError.stack, body: request } });

    return responseHandler({
        response,
        message: err.message,
        result: null,
        code: err.code || 500,
        errors: [err],
        isSuccess: false,
    });
};

module.exports = {
    globalErrorHandler,
    responseHandler
}