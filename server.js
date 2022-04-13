
//const jsonServer = require('json-server');
const express = require('express')
const server1 = express();
const cards = require('./src/data/api.json');


const server = jsonServer.create();
const router = jsonServer.router('api.json');
//const middlewares = jsonServer.defaults('index.html.old');

server1.get('/cards',(req,res)=>{
    return res.json(cards)
});

const port = (process.env.PORT || 3000);

//server.use(middlewares);
//server.use(router);

server.listen(port);

