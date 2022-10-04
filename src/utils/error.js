// Standard Error Handler extended from Error class
class CustomError extends Error {
    constructor({ message, type = 'UNKNOWN', code = 500 }) {
        super(message);
        this.type = type;
        this.message = message;
        this.code = code;
        this.name = this.constructor.name;
    }
}

module.exports = CustomError;
