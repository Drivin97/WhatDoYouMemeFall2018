const express = require('express');
const game = require('./game/controller');

const app = express();

const port = 3000;
const server = "localhost";

app.get("/", function(req, res){

    res.send("Hello World");

})

app.use(express.json());
app.use(express.urlencoded({exrended: true}));
app.use('/game', game);

app.listen(port);

console.log('Listening on: http://${server}:${port}');