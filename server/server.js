var express = require('express');
var app = express();

var Game = require('./models/Game');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');

app.use(express.static('build')); 

var runServer = function(callback) {
    var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/hot-and-cold';
    mongoose.connect(databaseUri).then(function() {
        var port = process.env.PORT || 8080;
        var server = app.listen(port, function() {
            console.log('Listening on localhost:' + port);
            if (callback) {
                callback(server);
            }
        });
    });
};

if (require.main === module) {
    runServer();
}

