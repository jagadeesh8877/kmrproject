'use strict';
var mongoose = require('mongoose')
//require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;


var DataSchema = new Schema({
  Id: {
    type: SchemaTypes.String,
  },
  //TODO: change time format in mongo
  Time: {
    
  },
  User: {
    type: SchemaTypes.String,
  },
  Zid: {
    type: SchemaTypes.Number,
  }
},{collection: 'things'});

module.exports = mongoose.model('Data', DataSchema);