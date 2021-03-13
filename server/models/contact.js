let mongoose = require('mongoose');

// create a model class
var Schema = mongoose.Schema;
var contactModel = new Schema(
  {
    name: {type: String, required: true},
    contactNumber: {type: String, required: true},
    emailAddress: {type: String, required: true}
  }
);

/**
 * add your code to 
 * create your model here
 * 
 */

module.exports = mongoose.model('Contact', contactModel);