module.exports = {
    INVALID_IS_REAL_MONEY_VALUE: {
        code: "2000",
        userError: "Please choose the type of in-game cash",
        detail: "The `is_real_money` parameter was not found in the body of your request, or it wasn't a boolean."
    },
    INVALID_CAPACITY_VALUE: {
        code: "2001",
        userError: "Please choose a valid capacity for the table",
        detail: "The `capacity` parameter was not found in the body of your request, or it wasn't matching the regex pattern."
    },
    INVALID_PLAYERS_ARRAY: {
        code: "2002",
        detail: "The `players` parameter was not found in the body of your request, or it wasn't a valid array."
    },
    INVALID_CREATED_BY_VALUE: {
        code: "2003",
        detail: "The `created_by` parameter was not found in the body of your request, or it wasn't matching the correct secret."
    },
    INVALID_MIN_PLAYERS_TO_START_GAME_VALUE: {
        code: "2004",
        userError: "Please choose a valid minimum players to start the game. There should be at least 2 players in a table for it to start the game.",
        detail: "The `min_players_to_start_the_game` parameter was not found in the body of your request, or it wasn't a valid number."
    },
    INVALID_BIG_BLIND_VALUE: {
        code: "2005",
        userError: "Please choose a valid big blind.",
        detail: "The `big_blind` parameter was not found in the body of your request, or it wasn't a valid number."
    },
    INVALID_SMALL_BLIND_VALUE: {
        code: "2006",
        userError: "Please choose a valid small blind.",
        detail: "The `small_blind` parameter was not found in the body of your request, or it wasn't a valid number."
    },
    INVALID_TABLE_ID: {
        code: "2007",
        userError: "Please choose a valid table id.",
        detail: "The `table_id` parameter was not found in the body of your request, or it wasn't a valid number."
    },
    INVALID_PLAYER_ID: {
        code: "2008",
        userError: "Please choose a valid player id.",
        detail: "The `player_id` parameter was not found in the body of your request, or it wasn't a valid mongoose object."
    },
    INVALID_IN_GAME_CASH_VALUE: {
        code: "2009",
        userError: "Please choose a valid in game cash value.",
        detail: "The `in_game_cash` parameter was not found in the body of your request, or it wasn't a valid number."
    },
}