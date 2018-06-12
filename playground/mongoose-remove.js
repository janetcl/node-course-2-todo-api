const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findOneByIdAndRemove()

Todo.findOneAndRemove({_id: '5b2003dc580bb2c7a7555230'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5b2003dc580bb2c7a7555230').then((todo) => {
  console.log(todo);
});
