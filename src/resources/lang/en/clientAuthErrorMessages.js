module.exports = {
    API_KEY_DOES_NOT_EXIST: {
        code: "-1",
        detail: "The Api Key does not exist. Contact your administrator or developer to check, or try again."
    },
    INVALID_API_KEY_AKA_TOKEN: {
        code: "100",
        detail: "The `token` parameter was not found in the body of your request, or it wasn't matching the regex pattern."
    },
    INVALID_SECRET_KEY: {
        code: "101",
        detail: "The `secret` parameter was not found in the body of your request, or it wasn't matching the correct secret."
    }
}