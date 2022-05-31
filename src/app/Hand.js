const Model = require('../core/model.js');
const {Decimal128, ObjectId} = require("mongodb");

module.exports = class Hand extends Model {
    constructor() {
        super();
        this.schema = new this.mongooseSchema({
            pot: Decimal128,
            winners: [
                {
                    player_id: ObjectId,
                    prize: Decimal128,
                    hand: {
                        combined_cards: Array,
                        rank_title: "",
                        all_cards: Array,
                        pool_of_cards: Array
                    }
                }
            ],
            history: Array
            /*
            [
                'First line or someshit ... Game #20490293 started ',
                'Player #29348032948 turn: called 20 coins',
                ...

                'The Hand #9203420948 ended. Winners: player1 <player_id> won $400 - player2 <player_id2> won $300'
            ]
            */
        });

        this.getModel(this.schema);
    }
}