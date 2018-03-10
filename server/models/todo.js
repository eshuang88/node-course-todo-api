var mongoose = require('mongoose');

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

module.exports = {Todo};
