//CRUD

const { ObjectID, MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    console.log('Connected correctly');

    const db = client.db(databaseName);

    //604e0171c4fa804f188a5e90
    //set, inc are operators

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("604e0171c4fa804f188a5e90")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("604e0171c4fa804f188a5e90")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Water plants'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })

})