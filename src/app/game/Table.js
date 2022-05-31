class Table {
    #tableId;

    #capacityAvailableTypes = ['2', '3', '4', '5', '6', '7', '8', '9'];
    #capacityType;

    #texasHoldemAvailableTypes = ["no-limit", "fixed-limit", "pot-limit"];
    #texasHoldemType;

    #isRealMoney;

    #hands = []; // all the handId's that have been played on this table.

    #creatorId = 0; // Zero indicates that the table was generated by the System
    #createdAt;

    #chatHistory = [
        // {
        //     userId: <user_id>,
        //     message: <string>,
        //     sentAt: <timestamp>
        // }
    ];

    #smallBlind;
    #bigBlind;

    #waitingQueue = [
        // {
        //     playerId: <player_id>,
        //     joinedTheQueueAt: <timestamp>
        // }
    ];

    #allSeats = {
        // "seat_<n>": {
        //     playerId: [0 | <player_id>],
        //     seatNumber: <n>,
        //     isPlaying: <boolean>
        // }
    };


    constructor(table_id) {
    }


}

module.exports = Table;