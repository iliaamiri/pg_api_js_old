const Table = require("./Table");

class Hand extends Table {
    #handId;

    #startedAt = 0;
    #endedAt = 0;

    #buttonUserId; // aka. dealer
    #smallBlindUserId;
    #bigBlingUserId;

    #pairCards = {
        // "<seatNumber>": {
        //     seatNumber,
        //     card1: '',
        //     card2: '',
        //     isShown: false
        // }
    };

    #boardCards = {
        // onFlopCard_1,
        // onFlopCard_2,
        // onFlopCard_3,
        // onTurnCard,
        // onRiverCard
    };

    #availableStates = ["PREFLOP", "FLOP", "TURN", "RIVER", "SHOWDOWN"];
    #currentState = this.#availableStates[0];

    #availableActions = ["CHECK", "CALL", "BET", "RAISE", "FOLD", "TIMEOUT"];
    #history = {
        // "PREFLOP": {
        //     "<didAt>": {
        //         seatNumber,
        //         action: this.#availableActions[0],
        //         amount,
        //         isAllIn: false
        //     }
        // },
        // "FLOP": {
        //     "<didAt>": {
        //         seatNumber,
        //         action: this.#availableActions[0],
        //         amount,
        //         isAllIn: false
        //     }
        // },
        // "TURN": {
        //     "<didAt>": {
        //         seatNumber,
        //         action: this.#availableActions[0],
        //         amount,
        //         isAllIn: false
        //     }
        // },
        // "RIVER": {
        //     "<didAt>": {
        //         seatNumber,
        //         action: this.#availableActions[0],
        //         amount,
        //         isAllIn: false
        //     }
        // },
        // "SHOWDOWN": {
        //     "<didAt>": {
        //         seatNumber,
        //         action: this.#availableActions[0],
        //         amount,
        //         isAllIn: false
        //     }
        // },
    };

    #seats = [
        // "<seatNumber>" : {
        //     seatNumber,
        //     playerId
        // }
    ];

    #turnQueue = [ // is very dynamic / changes after a person bets or raises
        // "<seatNumber>"
    ];

    constructor(tableId) {
        super(tableId);
    }
}

module.exports = Hand;