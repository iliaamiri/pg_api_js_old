const User = require("../0User.js");
const Players = require('./Players');
const EventEmitter = require('events');

class CommandChangeEvent extends EventEmitter {}

class Player {
    #playerId;

    #tablesJoined = [
      //  { tableId, seatNumber, isCurrent }
    ];

    #username;
    #avatar;

    #inGameBalance;
    #bettingAmount;

    commandChangeEvent

    #currentCommand;
    get currentCommand() { return this.#currentCommand; }
    set currentCommand(newCommand) {
        this.#currentCommand = newCommand;
        this.commandChangeEvent.emit('commandChange', newCommand);
    }

    get playerId() { return this.#playerId; }

    constructor(playerId = undefined) {
        if (typeof playerId !== "undefined") {
            this.commandChangeEvent = new CommandChangeEvent();
            this.#playerId = playerId;
            this.player = new User().model
                .then(model => model.findOne({_id: playerId}).exec());

            Players.onlinePlayers[playerId] = this;
        }
    }

    sendMessage(message) {

    }

    joinTable(tableId, buyInAmount) {

    }

    leaveTable() {

    }

    bet(amount) {

    }

    raise(amount) {

    }

    check() {

    }

    call(amount) {

    }

    fold() {

    }
}

module.exports = Player;