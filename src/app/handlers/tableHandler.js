module.exports = async (io, socket) => {

    const leaveTable = (tableId) => {
        // ...
    }

    const joinTable = (tableId, inGameChips) => {
        // 🕵️ check if the table is accessible for the user
        // 🕵️ check if the seat they chose is still empty or not
            // 🕵️👀 check if the user can join this table with the inGameChips they are purposing
        // ✅ player is joined.
        // ✅ take the inGameChips amount from their real/play money balance. Add it to their inGameBalance. (be careful!! if they already have some inGameBalance in that same table.. that's a red flag).

        // if a game is ongoing, this handler stops here. 🛑

        // if table reached its minimum capacity to start a game, START THE GAME. 🔥
            // else: this handler stops here 🛑
    }

    socket.on("table:leave", leaveTable);
    socket.on("table:join", joinTable);
    // socket.on("hand:bet", bet);
}