const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({_id: new ObjectID('5a7f606319ff41371862cd7c')}).toArray().then((docs) =>{
    //   console.log('todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to find docs');
    // });
    // db.close();
    // db.collection('Todos').find().count().then((count) =>{
    //   console.log(`todos count:${count}`);
    // }, (err) => {
    //   console.log('Unable to find docs');
    // });

    db.collection('Users').find({name: 'Bogdan'}).toArray().then((docs) =>{
      console.log(`Users`);
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to find docs');
    });
});
