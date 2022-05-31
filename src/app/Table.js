const Model = require('../core/model.js');
const {Decimal128, ObjectId} = require("mongodb");

module.exports = class Table extends Model {
    constructor() {
        super();
        this.schema = new this.mongooseSchema({
            is_real_money: Boolean,
            capacity: Number,
            table_watermark_image: String,
            players: [
                {
                    player_id: String,
                    status: String, // e.g. "Fold", "Waiting for their turn", "Checked", "Raised", "Called", "Waiting for other players"
                    current_best_combination: {
                        cards: Array,
                        rank_title: String
                    },
                    in_game_cash: Decimal128, // either real or fake (depends on is_real_money state)
                    current_cards: Array
                }
            ],
            currentGame: {
                cursor: Number, // e.g. player_id
                current_stage: String,
                current_dealer: Number, // player_id
                pot: Decimal128,
                cards: {
                    community: Array, // e.g. ["AS", "KD", "4D"],
                    available: Array, // i.e. available cards (playable cards from deck) e.g. ["AC", "KC", ...]
                    muck: Array, // i.e. burnt cards (muck cards). e.g. ["AD", "6S", ...]
                }
            },
            decision_timeout: Number, // e.g. 10 (in seconds)
            minimum_cash_to_join: Decimal128, // e.g. 500 (unit of money.)
            maximum_cash_to_join: Decimal128, // e.g. 500 (unit of money.)
            blinds: {
                small: Decimal128, // e.g. 5
                big: Decimal128 // e.g. 10
            },
            created_by: Number, // e.g. player_id
            created_at: Date, // e.g. Sun Dec 17 1995 03:24:00 GMT
            min_players_to_start_the_game: Number, // e.g. 2 (players)
        });

        this.getModel(this.schema);
    }
}