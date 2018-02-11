const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate(
//   {_id: new ObjectID('5a804d6ca417d5b469515448')},
//   {$set: {completed: true}
//   },
//   {returnOriginal: false}).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate(
  {_id: new ObjectID('5a7f7ae4884cf43ff47b9fd6')},
  {$set: {name: 'JJ'},
   $inc: {age: 1} },
  {returnOriginal: false}).then((result) =>{
  console.log(result);
});

});
