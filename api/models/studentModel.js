'use strict';
var mongoose = require('mongoose')
//require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;


var DataSchema = new Schema({
  RecordedTime: {
    type: Date,
    default: Date.now
  },
  CreatedDate: {
    type: Date,
    default: Date.now
  },
  Course: {
    type: SchemaTypes.String,
    default: "B.Tech"
  },
  Name: {
    type: SchemaTypes.String,
    required: 'Kindly enter the name of the task'
  },
  status: {
    type: [{
      type: String,
      enum: ['Late', 'Ontime']
    }],
    default: ['Ontime']
  }
});

module.exports = mongoose.model('Data', DataSchema);