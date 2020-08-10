const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

// Declare routers 
const userRouter = require('./users/userRouter');

const server = express();

const sessionConfig = {
    name: 'nameThatSession',
    secret: 'Nita nita boo bita',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false, // should be true in production
      httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
  
    store: new knexSessionStore(
      {
        knex: require("./data/dbConfig"),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60
      }
    )
}

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session(sessionConfig))

// Mount server.use(routers)
server.use('/api/user', userRouter);

module.exports = server;