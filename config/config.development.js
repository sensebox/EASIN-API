var config = require('./config.global')

config.server.name = 'easin-api';
config.server.version = '1.0.0';
config.server.port = 8080;
config.server.path = 'reports';

config.mongo.server = 'localhost';
config.mongo.collection = 'easin';
config.mongo.dbuser = 'easin-standard-user';
config.mongo.dbpass = 'easin-standard-user';

module.exports = config;