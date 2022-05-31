const Controller = require("../../core/Controller.js");
const ClientAuthException = require("../../core/exceptions/ClientAuthException.js");
const { apiKeySecret } = require("../../config/api.js");
// const ApiToken = require("../ApiToken.js");

const tokenAndSecretMatch = /^[a-zA-Z0-9_]*$/i;

const ClientAuthController = {
    ...Controller,

    async auth(req, res, next) {
        const requestParams = req.body;

        const token = requestParams['token'];
        const secret = requestParams['secret'];

        if (token === undefined || token.match(tokenAndSecretMatch) === null) {
            return next(new ClientAuthException("INVALID_API_KEY_AKA_TOKEN"));
        }
        if (secret === undefined || secret !== apiKeySecret) {
            return next(new ClientAuthException('INVALID_SECRET_KEY'));
        }

        const apiTokenModel = new ApiToken();

        apiTokenModel.model
            .then(apiTokenModel => apiTokenModel.findOne({ api_key: token }))
            .then(apiKey => {
                if (apiKey === null) {
                    return new Promise((resolve, reject) => reject(new ClientAuthException('API_KEY_DOES_NOT_EXIST')));
                }

                res.end(JSON.stringify({
                    status: true,
                    apiToken: apiKey
                }));
            })
            .catch(err => next(err));
    }
}

module.exports = ClientAuthController;