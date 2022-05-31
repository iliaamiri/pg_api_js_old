const express = require('express');
const apiPokerHandRouter = express.Router();

const PokerHandController = require("../../app/controllers/PokerHandController.js");

apiPokerHandRouter.post('/new', PokerHandController.new)
apiPokerHandRouter.get('/:hand_id', PokerHandController.get)
apiPokerHandRouter.post('/:hand_id/bet', PokerHandController.bet)
apiPokerHandRouter.put('/:hand_id/call', PokerHandController.call)
apiPokerHandRouter.put('/:hand_id/check', PokerHandController.check)
apiPokerHandRouter.post('/:hand_id/fold', PokerHandController.fold)

module.exports = apiPokerHandRouter;