const fs = require('fs');
fs.readFile('example.txt', (err, data) => {
if (err) {
console.error(err);
return;
}
console.log(data.toString());});