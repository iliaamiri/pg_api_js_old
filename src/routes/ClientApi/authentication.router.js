const express = require('express');
const apiClientAuthRouter = express.Router();

const ClientAuthController = require("../../app/controllers/ClientAuthController.js");

//apiClientAuthRouter.post('/auth', ClientAuthController.auth)

module.exports = apiClientAuthRouter;