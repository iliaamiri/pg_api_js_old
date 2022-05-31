const express = require('express');
const expressJWT = require('express-jwt');
const router = express.Router();

router.use(expressJWT({
    algorithms: ['RS256'],
    secret: JWT_PUBLIC_KEY,
    credentialsRequired: false,
    // requestProperty: 'user'
}));

const userAuthRouter = require('./User/authentication.router.js');
const clientAuthRouter = require("./ClientApi/authentication.router.js");
const pokerTableRouter = require("./Game/table.router.js");
const pokerHandRouter = require("./Game/hand.router.js");

router.use('/hand', pokerHandRouter);
router.use('/table', pokerTableRouter);
router.use('/client', clientAuthRouter);
router.use('/user/auth', userAuthRouter);

module.exports = router;