var connection = require('../connection');
 
function PZM_server() {
 
 this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from cars_list', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
 
 this.create = function(car, res) {
    connection.acquire(function(err, con) {
      con.query('insert into cars_list set ?', car, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };
 
 this.update = function(car, id, res) {
    connection.acquire(function(err, con) {
      con.query('update cars_list set ? where carId = ?', [car, id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };
 
 this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from cars_list where carId = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
 
}
module.exports = new PZM_server();