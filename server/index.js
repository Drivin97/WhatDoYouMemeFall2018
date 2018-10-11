const express = require('express');
const game = require('./game/controller');

const app = express();

app.get("/", function(req, res){

    res.send("Hello World");

})

app.use(express.json());
app.use(express.urlencoded({exrended: true}));
app.use('/game', game);

app.listen(3000);