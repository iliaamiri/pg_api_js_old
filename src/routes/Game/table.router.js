const express = require('express');
const PokerTableController = require("../../app/controllers/PokerTableController.js");
const expressJWT = require("express-jwt");
const apiPokerTableRouter = express.Router();

apiPokerTableRouter.use(expressJWT({
    algorithms: ['RS256'],
    secret: JWT_PUBLIC_KEY,
    credentialsRequired: true,
    // requestProperty: 'user'
}));

apiPokerTableRouter.get('/', PokerTableController.all)
apiPokerTableRouter.post('/new', PokerTableController.new);
apiPokerTableRouter.post('/:table_id/join', PokerTableController.join);
apiPokerTableRouter.put('/:table_id/leave', PokerTableController.leave);
apiPokerTableRouter.get('/:table_id', PokerTableController.get);

module.exports = apiPokerTableRouter;