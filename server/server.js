var express = require('express');
var bodyParser = require('body-parser');
// bodyParser 會把 JSON 的東西 parse 下來並變成 object

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e); // 如果失敗就印個 400 訊息
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
