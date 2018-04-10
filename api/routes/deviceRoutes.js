'use strict';

module.exports = function(app) {
  var deviceController = require('../controllers/deviceController');
  
  app.route('/devices')
    .get(deviceController.getAll)
    .post(deviceController.create);

  app.route('/devices/:id')  
    .get(deviceController.get)
    .put(deviceController.update)
    .delete(deviceController.delete);
};