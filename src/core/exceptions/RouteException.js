const { defaultLanguage } = require("../../config/language.js");
const ApiError = require("../ApiError.js");
const errors = require(`../../resources/lang/${defaultLanguage}/routeErrorMessages.js`)

module.exports = class RouteException extends ApiError {
    constructor(errorTitle) {
        const err = errors[errorTitle];
        super(err.code, errorTitle, err.userError, err.detail);
        super.httpCustomStatusCode = err.httpCustomStatusCode || super.httpCustomStatusCode;
    }
}