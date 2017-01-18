var pzm_server = require('./models/pzm_server');
 
module.exports = {
  configure: function(app) {
    app.get('/pzm_server/', function(req, res) {
      pzm_server.get(res);
    });
 
    app.post('/pzm_server/', function(req, res) {
      pzm_server.create(req.body, res);
    });
 
    app.put('/pzm_server/', function(req, res) {
      pzm_server.update(req.body, res);
    });
 
    app.delete('/pzm_server/:id/', function(req, res) {
      pzm_server.delete(req.params.id, res);
    });
  }
};