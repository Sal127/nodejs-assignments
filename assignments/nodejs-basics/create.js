const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname, 'files'), (err) => {
    if(err) throw err;
    console.log('Папка создана');
});

const pathToFile = path.join(__dirname, 'files', 'file.txt');
fs.writeFile(pathToFile, 'I am fresh and young', (err) => {
    if(err) throw err;
    console.log('Файл создан');
})