const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to my baby MongoDB server');
  }
  console.log('Connected to my baby MongoDB server');

  // === findOneAndUpdate === 有三個 arguments 如下
  // === db.collection.findOneAndUpdate(filter, update, options) ===
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a955ec23b04401a69f52f71'),
  // }, {
  //   // 務必要寫一個東西叫做 set 讓他更新成某個值
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: true
  //     // if true: return 更新前的值
  //     // if false: return 更新後的值
  // }).then((result) => {
  //   console.log(result);
  // });

  // challenge: update "Sammie" to "Estelle"
  // challenge: add "age" by 5
  db.collection('Users').findOneAndUpdate({
    name: 'Sammie'
  }, {
    $set: {name: 'Estelle'}, $inc: {age: 5}
  }, {
    returnOriginal: false
  }).then((result) => {
      console.log(result);
    }
  );

  // db.close(); // close the connection to the server
});
