var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// need to export the mongoose variable
module.exports = {
  mongoose
};
