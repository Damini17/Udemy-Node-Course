const mongoose = require('mongoose');

//task-manager-api is the name of the database
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});