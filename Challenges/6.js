const fs = require('fs');

const fileData = fs.readFileSync('2-json.json'); //buffer format

console.log(fileData.toString());

let data = fileData.toString(); //buffer to string

const user = JSON.parse(data) //string to json format in order to manipulate data

user.name = 'Bhavika'
user.age = 29

fs.writeFileSync('2-json.json', JSON.stringify(user)) // again stringify json to write to file