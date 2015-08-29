var models = require('../models');
var Report = require('../models').Report;

module.exports.get = function(req, res, next){
  if (req.params.id == undefined) {
    Report.find({}).exec(function(err,reports){
      if (err) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      res.send(reports);
      return next();
    });
  } else {
    Report.findOne({_id: req.params.id}).exec(function(err,report){
      if (err) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      res.send(report);
      return next();
    });
  }
}

module.exports.post = function(req, res, next){
  var report = new Report({
    type: req.params.type,
    geometry: req.params.geometry,
    properties: req.params.properties
  });

  report.save(function(err, report){
    if (err) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
    res.send(report);
    return next();
  });
}

module.exports.put = function(req, res, next){
  //TODO update report
  res.send("put");
  return next();
}

module.exports.delete = function(req, res, next){
  //TODO delete report
  res.send("delete");
  return next();
}