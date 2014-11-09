// Tutorial Node: https://www.youtube.com/watch?v=QseHOX-5nJQ

//Require is a node load function
var express = require('express');
var bodyParser = require ('body-parser');
var path = require ('path');
//Express is a function
var app = express();

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use middleware ie bootstrap via bower
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: true }));

//Define Our Routes - imports all the routes and script
//from the todos.js file
app.use(require('./todos'));

//Lets implement a web server
app.listen(1337, function (){
	console.log('ready on port 1337');
});


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');