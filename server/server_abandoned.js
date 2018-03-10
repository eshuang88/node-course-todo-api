var {mongoose} = require('./db/mongoose');

// create a model
// === .model('collection 名稱', {欄位設定}) ===
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, // require: true 就是值一定要存在
    minlength: 1, // 這是一種 validator
    trim: true, // 把字串前後的空白丟掉
    uppercase: true
  },
  completed: {
    type: Boolean,
    default: false // 預設它是某個值，現在預設為 false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
//
// var newTodo = new Todo({text: 'cook dinner'});
//
// // .save().then((甲) => {}, (乙) => {})
// newTodo.save().then((doc) => {
//   console.log('Saved Todo.', doc);
// }, (e) => {
//   console.log('Unable to save Todo.');
// });

// challenge1: 建立一個 otherTodo, 基於 Todo
// var otherTodo = new Todo({
//   text: ' play guitar ',
// });

// challenge2: 建立一個 mongoose 的條件限制模型叫做 User, 有 email 欄位
// email 欄位要有限制：trim space, set type, min minlength = 1
var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
}); // and create a new data instance below!

var user = new User({
  email: 'estelle@example.com'
}); // and callback on this using "user.save().then();"

// .then() 裡面可以放兩個 arguments，前者是成功訊息，後者是失敗訊息
user.save().then((doc) => {
  console.log('User saved!', doc);
}, (e) => {
  console.log('Unable to save user', e);
});


// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2)); // 其實不一定要 JSON.stringify
// }, (err) => {
//   console.log('Unable to save otherTodo.');
// });
