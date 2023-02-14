const { readdir, readFile, writeFile } = require('fs');
const { join } = require('path');
const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

// Read and reverse contents of text files in a directory
// Define the CB functions separately and outside
const reverseText = (str) => str.split('').reverse().join('');

const processFile = (file) => {
  const checkError = (error) => {
    if (error) return console.log('Error: File could not be saved!');
    console.log(`${file} was successfully saved in the outbox!`);
  };
  const obtainData = (error, data) => {
    if (error) return console.log('Error: File error');
    writeFile(join(outbox, file), reverseText(data), checkError);
  };
  readFile(join(inbox, file), 'utf8', obtainData);
};

readdir(inbox, (error, files) => {
  if (error) return console.log('Error: Folder inaccessible');
  files.forEach((file) => processFile(file));
});
