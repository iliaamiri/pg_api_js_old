/*
* ///////////// Importing the HTTP server Socket.io + Express.js, from app.js /////////////
* */
const server = require('./app.js');

/*
* ///////////// Setting the port that the API is listening on /////////////
* */
const PORT = process.env.PORT || 8080;

/*
* ///////////// Start listening /////////////
* */
server.listen(PORT, () => {
    console.log("Running on port " + PORT)
});