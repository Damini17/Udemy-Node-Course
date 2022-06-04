const express = require('express')
require('./db/mongoose') //this enusres that this file runs
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const jwt = require('jsonwebtoken');

const app = express()
const port = process.env.PORT || 3000

//parse incoming json to object
app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123@'}, 'thisismynodenewcourse')
    console.log(token)
}
 
myFunction()

app.listen(port, () => {
    console.log('Server is up on port' + port);
})