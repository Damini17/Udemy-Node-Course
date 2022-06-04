const fs = require('fs')

const book = {
    'title': 'The murder on orient express',
    'author': 'Agatha Christie'
}

const stringBookJSON = JSON.stringify(book)
console.log(stringBookJSON);

const parseJSON = JSON.parse(stringBookJSON)
console.log(parseJSON.author);

fs.writeFileSync('1-json.json', stringBookJSON);

const fileData = fs.readFileSync('1-json.json');

console.log(fileData); //this is data buffer

console.log(fileData.toString());
