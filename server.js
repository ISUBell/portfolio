var express = require('express');
var app = express();
//var angular = require('angular');
require('angulartics');
var googleanalytics = require('angulartics-google-analytics');

angular.module('myApp', ['angulartics', googleanalytics]);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.use(express.static('app'));
app.use(express.static('node_modules'));
app.use(express.static(__dirname));

//necessary for serving static files instead of routing back to index.html
//app.use(serveStatic(__dirname, {'index': ['index.html']}))

app.get('/', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});