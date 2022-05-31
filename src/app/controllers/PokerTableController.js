const Controller = require("../../core/Controller.js");
const PokerTableException = require("../../core/exceptions/PokerTableException.js");
const Table = require("../Table.js");
const {Decimal128} = require("mongodb");
const { mongoObjectIdRegex } = require("../../core/pregs.js")

const PokerTableController = {
    ...Controller,

    async all(req, res, next) {
        const tableModel = new Table();

        const allTables = await (await tableModel.model).findAll();

        console.log(allTables);

        res.json({
            allTables
        });
    },

    async new(req, res, next) {
        const requestParams = req.body;

        const isRealMoney = requestParams['is_real_money'];
        const capacity = Number(requestParams['capacity']);
        const players = requestParams['players'];
        const creator = requestParams['created_by'];
        const minPlayersToStartTheGame = Number(requestParams['min_players_to_start_the_game']);
        let bigBlind = requestParams['big_blind'];
        let smallBlind = requestParams['small_blind'];

        if (isRealMoney === undefined || typeof isRealMoney !== 'boolean') {
            throw new PokerTableException('INVALID_IS_REAL_MONEY_VALUE');
        }
        if (capacity === undefined || isNaN(capacity)) {
            throw new PokerTableException('INVALID_CAPACITY_VALUE');
        }

        if (players === undefined || players.length === undefined) {
            throw new PokerTableException('INVALID_PLAYERS_ARRAY');
        }
        players.map(player => {
            if (player.player_id === undefined || player.status === undefined) {
                throw new PokerTableException('INVALID_PLAYERS_ARRAY');
            }
        })

        if (creator === undefined || isNaN(creator)) {
            throw new PokerTableException('INVALID_CREATED_BY_VALUE');
        }
        if (minPlayersToStartTheGame === undefined || isNaN(minPlayersToStartTheGame) || minPlayersToStartTheGame < 2) {
            throw new PokerTableException('INVALID_MIN_PLAYERS_TO_START_GAME_VALUE');
        }

        if (bigBlind === undefined || typeof bigBlind !== 'string') {
            throw new PokerTableException('INVALID_BIG_BLIND_VALUE');
        }
        if (smallBlind === undefined || typeof smallBlind !== 'string') {
            throw new PokerTableException('INVALID_SMALL_BLIND_VALUE');
        }
        try {
            bigBlind = Decimal128.fromString(bigBlind);
        } catch (e) {
            throw new PokerTableException('INVALID_BIG_BLIND_VALUE');
        }
        try {
            smallBlind = Decimal128.fromString(smallBlind);
        } catch (e) {
            throw new PokerTableException('INVALID_SMALL_BLIND_VALUE');
        }

        const tableModel = new Table();

        const newCreatedTable = await (await tableModel.model).create({
            big_blind: bigBlind,
            small_blind: smallBlind,
            capacity: capacity,
            players: players,
            created_by: creator,
            created_at: Date.now(),
            min_players_to_start_the_game: minPlayersToStartTheGame
        })

        res.end(JSON.stringify({
            status: true,
            table: newCreatedTable
        }));
    },

    async join(table_id, req, res, next) {
        const requestParams = req.body;

        const playerId = Number(requestParams.player_id);
        let inGameCash = requestParams.in_game_cash;

        if (table_id === undefined || table_id.match(mongoObjectIdRegex) === null) {
            throw new PokerTableException('INVALID_TABLE_ID');
        }
        if (playerId === undefined || isNaN(playerId)) {
            throw new PokerTableException('INVALID_PLAYER_ID');
        }
        if (inGameCash === undefined || typeof inGameCash !== 'string') {
            throw new PokerTableException('INVALID_IN_GAME_CASH_VALUE');
        }
        try {
            inGameCash = Decimal128.fromString(inGameCash);
        } catch (e) {
            throw new PokerTableException('INVALID_IN_GAME_CASH_VALUE');
        }

        const tableModel = new Table();

        const new_player = {
            player_id: playerId,
            status: "Waiting for other players",
            in_game_cash: inGameCash
        };


        const updated = await (await tableModel.model).findOneAndUpdate(
            { _id: table_id },
            { $push: { players: new_player } }
        )

        console.log(updated);

    },

    leave(table_id, req, res, next) {

    },

    get(table_id, req, res, next) {

    }
}

module.exports = PokerTableController;