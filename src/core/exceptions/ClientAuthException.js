const ApiError = require("../ApiError");

const { defaultLanguage } = require("../../config/language.js");
const errors = require(`../../resources/lang/${defaultLanguage}/clientAuthErrorMessages.js`)

module.exports = class ClientAuthException extends ApiError {
    constructor(errorTitle) {
        const err = errors[errorTitle];
        super(err.code, errorTitle, "Internal Error", err.detail);
    }
}