module.exports = async (io, socket) => {

    const startHand = (payload) => {
        // ...
    }

    const endHand = (orderId, callback) => {
        // ...
    }


    const newCommand = (orderType, payload) => {
        // check if the user is in turn (can command)


    }



    socket.on("hand:start", startHand);
    socket.on("hand:over", endHand);
    socket.on("hand:newCommand", newCommand);
}