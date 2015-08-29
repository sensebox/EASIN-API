'use strict';
var cfg = require('./config');
var restify = require('restify');
var routes = require('./routes');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/easin',{
  // user: cfg.dbuser,
  // pass: cfg.dbuserpass
});

var db = mongoose.connection;
db.on('error', function(){
  console.error.bind(console, 'connection error:')
});

db.once('open', function(callback){

  var server = createServer();

  routes.SetupRoutes(server,cfg.server.path);

  server.listen(cfg.server.port, function () {
    console.log('%s listening at %s', server.name, server.url);
  });
});

db.on('close', function(callback){
  console.log("connection close");
  process.exit();
});


function createServer(){

  var server = restify.createServer({
    name: cfg.server.name,
    version: cfg.server.version
  });

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  return server;
}