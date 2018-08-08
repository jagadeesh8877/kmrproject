'use strict';
module.exports = function(app) {
  var studentController = require('../controllers/studentController');


  app.route('/data')
    .get(studentController.ListData)
    .post(studentController.RecordData);


  app.route('/data/:dataId')
    .get(studentController.ReadData)
    .put(studentController.UpdateData)
    .delete(studentController.DeleteData);
};