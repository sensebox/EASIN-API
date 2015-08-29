var controllers = require('../controllers');

module.exports.SetupRoutes = function(server, path){
  server.get({path : path+'/:id'}, controllers.get);
  server.get({path: path}, controllers.get);
  server.post({path : path}, controllers.post);
  server.put({path : path+'/:id'}, controllers.put);
  server.del({path : path+'/:id'}, controllers.delete);
}