//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    console.log('Connected correctly');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Andrew',
    //     age: 28
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user'); 
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 30
    // }], (error, result) => {
    //     if(error)
    //     return console.log('Unable to insert documents');

    //     console.log(result.ops);
    // })
})