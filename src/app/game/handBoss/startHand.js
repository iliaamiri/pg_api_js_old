async function startHand() {

    // find the table and check if exists
    // check if the table has an ongoing game or not.
    // if had, this function stops here. 🛑

    // start the game. 🔥 🧨

    // PRE-FLOP state

    /*
    * // Determine who is DEALER (Button User)
    * // Determine who is SMALL BLIND
    * // Determine who is BIG BLIND
    * // Determine who is UTG (under the gun / the first player who starts their turn).
    * // Make a Turn Queue of players that should decide their move.
    *   // Iterate through the Turn Queue
    *       // EMIT the "Your Turn" event for the player whose turn it is.
    *       // WAIT until the player's status in this turn changes. (TIMEOUT PERIOD)
    */

    player.commandChangeEvent.on('commandChange', (newCmd) => {

        switch (orderType) {
            case "bet":
                const amount = payload.amount;

                break;
            case "check":
                break;
            case "fold":
                break;
            default:
                break;
        }



        //  newCommand(newCmd, amount)
    });

    /*
    *       // If someone BETS or RAISES:
    *           // Update the Turn Queue.
    *           // Re-Iterate !!!
    *       // else
    *           // If the player decides other than betting or raising,
    *               // then go to the next player, whose turn it is
    *           // Repeat until the queue finishes.
    *       // EMIT the "Player Action Sync" event ot all the players seating on the table.
    * // add up every bet and calls from users to the totalPot.
    * // make everyone's bet amounts zero (reset 'em amounts)
    * // go to the next state
    * */

    // FLOP state
    /*
    * // EMIT the "Show FLOP Three Cards" event for all the players on the table.
    * // Determine who'll start the first this round (It's SMALL BLIND)
    * // SMALL BLIND starts their turn
    * // Make a Turn Queue of players that should decide their move.
    *   // Iterate through the Turn Queue
    *       // EMIT the "Your Turn" event for the player whose turn it is.
    *       // WAIT until the player's status in this turn changes. (TIMEOUT PERIOD)
    *       // If someone BETS or RAISES:
    *           // Update the Turn Queue.
    *           // Re-Iterate !!!
    *       // else
    *           // If the player decides other than betting or raising,
    *               // EMIT the "Player Action Sync" event ot all the players seating on the table.
    *               // then go to the next player, whose turn it is
    *           // Repeat until the queue finishes.
    * // add up every bet and calls from users to the totalPot.
    * // make everyone's bet amounts zero (reset 'em amounts)
    * // go to the next state
    * */

    // TURN state
    /*
    * // EMIT the "Show TURN Card" event for all the players on the table.
    * // Determine who'll start the first this round (It's SMALL BLIND)
    * // SMALL BLIND starts their turn
    * // Make a Turn Queue of players that should decide their move.
    *   // Iterate through the Turn Queue
    *       // EMIT the "Your Turn" event for the player whose turn it is.
    *       // WAIT until the player's status in this turn changes. (TIMEOUT PERIOD)
    *       // If someone BETS or RAISES:
    *           // Update the Turn Queue.
    *           // Re-Iterate !!!
    *       // else
    *           // If the player decides other than betting or raising,
    *               // EMIT the "Player Action Sync" event ot all the players seating on the table.
    *               // then go to the next player, whose turn it is
    *           // Repeat until the queue finishes.
    * // add up every bet and calls from users to the totalPot.
    * // make everyone's bet amounts zero (reset 'em amounts)
    * // go to the next state
    * */

    // RIVER state
    /*
    * // EMIT the "Show RIVER Card" event for all the players on the table.
    * // Determine who'll start the first this round (It's SMALL BLIND)
    * // SMALL BLIND starts their turn
    * // Make a Turn Queue of players that should decide their move.
    *   // Iterate through the Turn Queue
    *       // EMIT the "Your Turn" event for the player whose turn it is.
    *       // WAIT until the player's status in this turn changes. (TIMEOUT PERIOD)
    *       // If someone BETS or RAISES:
    *           // Update the Turn Queue.
    *           // Re-Iterate !!!
    *       // else
    *           // If the player decides other than betting or raising,
    *               // EMIT the "Player Action Sync" event ot all the players seating on the table.
    *               // then go to the next player, whose turn it is
    *           // Repeat until the queue finishes.
    * // add up every bet and calls from users to the totalPot.
    * // make everyone's bet amounts zero (reset 'em amounts)
    * // go to the next state
    * */


    // SHOWDOWN state
    /*
    * // EMIT the "Showdown State" event to all the players along with all the cards of other players on the table that are still playing (not folded).
    * // DETERMINE the best combination, the winner(s) and the amount of winning(s) for every winner.
    * // Add the winning amounts back to the winner(s)'s inGameChips.
    * // EMIT the "Winners" event to all the players on the table along with the best combinations and the winning prizes that goes to each player.
    * // Record the result and winning and everything in the database.
    * // Hand finishes ✅
    * // If the table still has enough players to start another hand, then restart this game.
    *   // Players who don't have enough chips to play will not be included in the next hand
    *
    * */
}

module.exports = startHand;