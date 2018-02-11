const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to MongoDB server');
db.collection('Users').findOneAndDelete({_id: new ObjectID("5a805986a417d5b4695156c0")}).then((result) =>{
  console.log(result);
});
});
