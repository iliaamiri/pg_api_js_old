const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('send_message_to_party', (message, tableId, from) => {

});