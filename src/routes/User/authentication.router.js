const express = require('express');
const apiUserAuthRouter = express.Router();

const userAuthController = require("../../app/controllers/UserAuthController.js");

apiUserAuthRouter.post('/login', userAuthController.login)
apiUserAuthRouter.post('/register', userAuthController.register)
apiUserAuthRouter.put('/logout', userAuthController.logout)
apiUserAuthRouter.post('/forgot_password', userAuthController.forgotPassword)
apiUserAuthRouter.post('/verify/email', userAuthController.verifyEmail)

module.exports = apiUserAuthRouter;