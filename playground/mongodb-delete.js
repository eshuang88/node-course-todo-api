const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to my baby MongoDB server');
  }
  console.log('Connected to my baby MongoDB server');

  // // === deleteMany === 刪掉所有符合條件的資料
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // // === deleteOne === 刪掉符合條件的第一筆資料
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // === findOneAndDelete === 刪掉特定資料並且告訴我哪一筆被刪掉了
  // db.collection('Todos').findOneAndDelete({text: 'listen to music'}).then((result) => {
  //   console.log('I just deleted ');
  //   console.log(result);
  // });

  // challenge1: 刪掉 Users 裡面所有叫做 Estelle 的人
  // challenge2: 刪掉某個特定 ID 的人
  db.collection('Users').deleteMany({name: 'Estelle'}).then((result) => {
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a96603bca6dd12568d9ec52'),
  }).then((result) => {
    console.log('I just killed ');
    console.log(result);
  });

  // db.close(); // close the connection to the server
});
