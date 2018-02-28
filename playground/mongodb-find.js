const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to my baby MongoDB server');
  }
  console.log('Connected to my baby MongoDB server');

  // ==== .toArray() ====
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a955ec23b04401a69f52f71'),
  //   // 重要：這裡不能直接寫 id: '一串字'，因為 objectID 很特別
  //   // 必須寫成 new ObjectID('一串字')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  // ==== .count() ====
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  // ==== challenge: count how many users named Estelle ===
  db.collection('Users').find({name: 'Chris'}).count().then((count) => {
    console.log(`Users named Chris count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  })
  // 也可以查詢範圍 { age: { $gt: 20, $lt: 30 } }

  // db.close(); // close the connection to the server
});
