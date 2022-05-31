const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('email_security_alert_access_to_account', async (email, deviceInfo, location, dateAndTime) => {

});

eventEmitter.on('send_forgot_password_email', (email, callbackLink) => {

});

eventEmitter.on('email_verification_code', (email, verificationCode) => {

});

eventEmitter.on('text_verification_code', (phoneNumber, verificationCode) => {

});