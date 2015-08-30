var restify = require('restify');
var Report = require('../models').Report;

module.exports.get = function (req, res, next){
  if (req.params.id == undefined) {
    Report.find({}).exec(function (err,reports){
      if (err) return next(new restify.InvalidArgumentError(JSON.stringify(err.message)));
      res.send(reports);
      return next();
    });
  } else {
    Report.findOne({_id: req.params.id}).exec(function (err,report){
      if (err) return next(new restify.NotFoundError("Resource with id "+req.params.id+" not found."));
      res.send(report);
      return next();
    });
  }
}

module.exports.post = function (req, res, next){
  var report = new Report({
    type: req.params.type,
    geometry: req.params.geometry,
    properties: req.params.properties
  });

  report.save( function(err, report){
    if (err) return next(new restify.InvalidArgumentError(JSON.stringify(err.message)));
    res.send(report);
    return next();
  });
}

module.exports.put = function (req, res, next){
  Report.findOne({_id:req.params.id}).exec(function (err, report) {
    if (err) return handleError(err);

    req.params.type!=null ? report.type = req.params.type : null;
    req.params.geometry!=null ? report.geometry = req.params.geometry : null;
    req.params.properties!=null ? report.properties = req.params.properties : null;

    report.save(function (err) {
      if (err) return handleError(err);
      res.send(report);
      return next();
    });
  });
}

module.exports.delete = function (req, res, next){
  Report.findOne({_id:req.params.id}).remove().exec(function(err,report){
    if (err) return next(new restify.NotFoundError("Resource with id "+req.params.id+" not found."));
    res.send("Resource successfully deleted.");
    return next();
  });
}