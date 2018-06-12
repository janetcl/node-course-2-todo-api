var express = require('express');
// takes your JSON and converts it to an object, attaching it to the request object
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// url for a REST API
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

// // // create one todo
// // var newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
// //
// // // saves the new data to the mongodb database
// // newTodo.save().then((doc) => {
// //   console.log('Saved todo', doc);
// // }, (e) => {
// //   console.log('Unable to save todo')
// // });
//
//
// // var newestTodo = new Todo({
// //   text: '   Cry   '
// // });
// //
// // newestTodo.save().then((doc) => {
// //   console.log(JSON.stringify(doc, undefined, 2));
// // }, (e) => {
// //   console.log('Unable to save todo')
// // });
//
//
// var newUser = new User({
//   email: 'janetlee2016@gmail.com      '
// });
//
// newUser.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
