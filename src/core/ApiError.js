module.exports = class ApiError extends Error {
    httpCustomStatusCode = 200;
    code
    msg
    userError
    detail
    constructor(errorCode, errorMessage, userError, errorDetail) {
        super();
        this.code = errorCode;
        this.msg = errorMessage;
        this.userError = userError;
        this.detail = errorDetail;
        this.name = this.constructor.name;
    }
}