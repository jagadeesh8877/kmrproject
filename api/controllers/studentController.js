'use strict';


var mongoose = require('mongoose'),
  Data = mongoose.model('Data');

exports.ListData = function(req, res) {
  Data.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.RecordData = function(req, res) {
  var newData = new Data(req.body);
  newData.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.ReadData = function(req, res) {
  Data.find({Zid: req.params.dataId}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.GetDataByDate = function(req, res) {
  var convertedStartDate = parseInt(req.params.startDate);
  var convertedEndDate = parseInt(req.params.endDate);
  Data.find({Time: {$gte: convertedStartDate, $lte: convertedEndDate}}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.UpdateData = function(req, res) {
  Data.findOneAndUpdate({_id: req.params.dataId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.DeleteData = function(req, res) {


  Data.remove({
    _id: req.params.dataId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'data successfully deleted' });
  });
};