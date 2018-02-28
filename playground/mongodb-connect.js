const {MongoClient, ObjectID} = require('mongodb');
// 課程一開始是 const MongoClient = require('mongodb').MongoClient;
// 也可以寫成 const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to my baby MongoDB server');
  }
  console.log('Connected to my baby MongoDB server');
  // needs to write some data or the db won't be created!
  // no need to create collection beforehand. Just go ahead and name it whatever you want.

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // }); // insertOne has 2 arguments


  // challenge: insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Estelle',
    age: 25,
    location: 'Taipei',
  }, (err, result) => {
    if (err) {
      return console.log('Fail to insert Users!');
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.close(); // close the connection to the server
});
// 1st argument is the URL you'd connect
// 2nd is a callback function
