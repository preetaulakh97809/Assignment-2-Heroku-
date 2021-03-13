let mongoose = require('mongoose');

// create a model class
var Schema = mongoose.Schema;
var loginModel = new Schema(
  {
    userName: {type: String, required: true},
    password: {type: String, required: true}
  }
);

/**
 * add your code to 
 * create your model here
 * 
 */

module.exports = mongoose.model('Login', loginModel);