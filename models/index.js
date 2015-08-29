var mongoose = require('mongoose');
var reportSchema = require('./schema/report');

var Report = mongoose.model('Report', reportSchema);

module.exports.Report = Report;