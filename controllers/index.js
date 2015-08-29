var models = require('../models');

module.exports.get = function(req, res, next){
  res.send("get");
  return next();
}

module.exports.post = function(req, res, next){
  res.send("post");
  return next();
}

module.exports.put = function(req, res, next){
  res.send("put");
  return next();
}

module.exports.delete = function(req, res, next){
  res.send("delete");
  return next();
}