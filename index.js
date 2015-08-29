var cfg = require('./config');
var restify = require('restify');

var server = restify.createServer({
  name: cfg.server.name,
  version: cfg.server.version
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});


server.listen(cfg.server.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});