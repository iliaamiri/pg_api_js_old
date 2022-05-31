require('./init');

/*
* ///////////// Importing the basic configuration values /////////////
* These configuration may include the options for session, cors, etc.
* */
const { sessionOptions } = require('./config/session.js');
const { corsOptions } = require('./config/cors.js');

/*
* ///////////// Importing the express-session to handle (server-side) sessions /////////////
* https://www.npmjs.com/package/express-session
* */
const session = require('express-session');

/*
* ///////////// Importing the express module and initiating it (app) /////////////
* https://expressjs.com/
* */
const express = require('express');
const app = express();

/*
* ///////////// Importing the http module to use it for integrating socket.io with express.js /////////////
* */
const http = require('http');

/*
* ///////////// Creating a http server using express' instance /////////////
* */
const server = http.createServer(app);

/*
* ///////////// Importing the Server class from socket.io module and initiating the socket.io using the above server /////////////
* */
const { Server } = require('socket.io');
const io = new Server(server);

/*
* ///////////// Importing all the socket handlers /////////////
* */
const handHandler = require("./app/handlers/handHandler");
const tableHandler = require("./app/handlers/tableHandler");
const gameChatHandler = require("./app/handlers/gameChatHandler");

io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    socket.close();

    // create a new instance of player based on playerId
    socket.user = new Player();

    console.log("Token: ", token);

    next();
});

io.on('connection', async (socket) => {
    try {
        await handHandler(io, socket);
        await tableHandler(io, socket);
    } catch (err) {
        console.log(err);
    }
});


/*
* ///////////// Importing the middlewares /////////////
* Some of these middlewares are popular and have been used in API projects. Cors Middleware is one example.
* Most of them are created and used within this project based on the project's needs.
* */
const cors = require('cors');
const jsonOnly = require("./app/middlewares/JsonOnly.js");
const setLanguage = require("./app/middlewares/SetLanguage.js");

/*
* ///////////// Using the middlewares /////////////
* Assigning the middlewares to express' instance
* */
app.use((req, res, next) => { req.io = io; next(); })
app.set('trust proxy', 1);
app.use(session(sessionOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(setLanguage());
app.use(jsonOnly());
//app.use(userAuth());

app.use('/api', require('./routes/index'));

/*
* ///////////// Importing Exceptions /////////////
* */
const RouteException = require("./core/exceptions/RouteException");

// Route doesn't exist (404)
app.use((req, res, next) => {
    throw new RouteException("ROUTE_DOES_NOT_EXIST");
});

// centralized error handling via middleware.
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.httpCustomStatusCode || 500);

    delete err.httpCustomStatusCode;

    res.json({
        status: false,
        error: err
    });

});

module.exports = server;