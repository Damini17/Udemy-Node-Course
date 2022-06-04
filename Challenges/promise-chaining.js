const mongoose = require('mongoose');
require('../task-manager/src/db/mongoose')
const Task = require('../task-manager/src/db/models/task');
const User = require('../task-manager/src/db/models/user');

// Task.findByIdAndDelete('605182ae99b46942d8b54b9c').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});

    return count;
}

deleteTaskAndCount('60518277f479598438599b84').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age });
//     const count = await User.countDocuments({ age });

//     return count;
// }

// updateAgeAndCount('605180e07af62967d83442ee', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })