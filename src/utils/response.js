module.exports = responseHandler = (data) => {
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