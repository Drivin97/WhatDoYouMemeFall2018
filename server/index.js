//Module management. Need to link math.js to index.js
const math = require('./math');

//Adding in express through a a constant, to be able to use express
const express = require('express');



console.log("2 + 2 = "+sum);

//App for our server... express can be a function
const app = express();

app.get("/add", function(req, res, next){

    var sum = math.add(2,2);
    res.send({sum: sum});

});

//Maps function and handles request
//Everytime user hits this location in the server, this will run
//The "/" is the root location
app.use("/", function(req, res, next){

    //"Sending" information to the client. Like return
    res.send("Hello World");

});

app.listen(3000);