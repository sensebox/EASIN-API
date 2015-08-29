var Schema = require('mongoose').Schema;
var timestamp = require('mongoose-timestamp');

var reportSchema = new Schema({
  ICCID:{
    type: String,
    trim: true
  },
  OAUTHID:{
    type: String,
    trim: true
  },
  LSID:{
    type: String,
    trim: true
  },
  Abundance:{
    type: String,
    trim: true
  },
  Precision:{
    type: String,
    trim: true
  },
  Comment:{
    type: String,
    trim: true
  },
  Status:{
    type: String,
    trim: true,
    default: 'submitted'
  },
});

module.exports = reportSchema.plugin(timestamp);