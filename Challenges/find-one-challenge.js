//CRUD

const { ObjectID, MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    console.log('Connected correctly');

    const db = client.db(databaseName);

    // db.collection('users').findOne({ name: 'Andrew', age: 1 }, (error, user) => {
    //     if (error)
    //         return console.log('Unable to fetch user');

    //     console.log(user);
    // })

    // db.collection('users').findOne({ _id: new ObjectID("604e04b06cb0473690effeed") }, (error, user) => {
    //     if (error)
    //         return console.log('Unable to fetch user');

    //     console.log(user);

    // })

    // db.collection('users').find({age: 28}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({age: 28}).count((error, users) => {
    //     console.log(users);
    // })

    db.collection('tasks').findOne({_id: new ObjectID("604e03014477fe60881a81bd")}, (error, task)=> {
        console.log(task);
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    })
})