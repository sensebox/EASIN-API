var config = require('./config.global')

config.server.name = 'easin-api';
config.server.version = '1.0.0';
config.server.port = 8081;
config.server.path = 'report';

config.mongo.collection = '';

module.exports = config;