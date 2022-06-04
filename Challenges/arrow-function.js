//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    //here we don't want to use arrow function becoz arrow functions
    //don't have their own this binding
    getTasksToDo () {
        return this.tasks.filter( (task) => task.completed == false)
    }
}

console.log(tasks.getTasksToDo())