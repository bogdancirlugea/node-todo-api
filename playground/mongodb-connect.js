// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text:'Something to write',
    //   completed: false
    // }, (err, result)=>{
    //   if(err){
    //     return console.log('Unable to insert todo')
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //   name:'Bogdan',
    //   age:'27',
    //   location:'Paris'
    // }, (err, result) =>{
    //   if(err){
    //     return console.log('Unable to insert user');
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    //   console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});