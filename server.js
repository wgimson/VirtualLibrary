// MIDDLEWARE =================================================================
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	favicon = require('serve-favicon'),
	path = require('path'),
	db = require('./config/db');
	apiRouter = require('./routes/apiRouter'),
	frontEndRouter = require('./routes/frontEndRouter');

// CONFIG =====================================================================
var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING ====================================================================
app.use('/api', apiRouter);
app.use('/home', frontEndRouter);

// CONNECT TO DB ==============================================================
mongoose.connect('mongodb://localhost/librarydb');

// LISTEN ON SERVER 
app.listen(port);
console.log('The magic happens on port ' + port);