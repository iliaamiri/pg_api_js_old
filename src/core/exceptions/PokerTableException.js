const { defaultLanguage } = require("../../config/language.js");
const ApiError = require("../ApiError.js");
const errors = require(`../../resources/lang/${defaultLanguage}/pokerTableErrorMessages.js`)

module.exports = class PokerTableException extends ApiError {
    constructor(errorTitle) {
        const err = errors[errorTitle];
        super(err.code, errorTitle, err.userError, err.detail)
    }
}