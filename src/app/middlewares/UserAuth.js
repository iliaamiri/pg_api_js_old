const crypto = require('crypto');
const userAuthException = require("../../core/exceptions/userAuthException.js");

const getHashedToken = (rawToken) => {
    const hash = crypto.createHash('sha512');
    const data = hash.update(rawToken, 'utf-8');
    return data.digest('hex');
}

module.exports = () => {
    return (req, res, next) => {
        const bearerHeader = req.header['authorization'];

        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403);
        }

        const hashedToken = getHashedToken(bearerHeader);

        const userModel = new User();
        const tokenModel = new Token();
        tokenModel.model
            .then(model => model.findOne({token: hashedToken}))
            .then(result => {
                if (result === null) {
                    return next(new userAuthException('USER_AUTHENTICATION_FAILED'))
                } else {
                    req.token = result;
                    return userModel.model;
                }
            })
            .then(userModel => userModel.findOne({_id: req.token.user_id}))
            .then(user => {
                if (user === null) {
                    return next(new userAuthException('AUTHENTICATED_USER_NOT_FOUND'));
                } else {
                    req.user = user;
                    next();
                }
            })
            .catch(error => next(error));
    }
}