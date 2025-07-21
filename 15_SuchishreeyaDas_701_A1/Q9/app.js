const fs = require('fs');

// 1. Create and write to a file
fs.writeFileSync('demo.txt', 'Hello, this is the first line.\n');
console.log('Created and written');

// 2. Append content to the file
fs.appendFileSync('demo.txt', 'This is an appended line.\n');
console.log('Content appended.');

// 3. Read the file
const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File content:\n' + data);

// 4. Rename the file
fs.renameSync('demo.txt', 'renamed.txt');
console.log('File renamed to renamed.txt');

// 5. Check if file exists
if (fs.existsSync('renamed.txt')) {
    console.log('renamed.txt exists.');
}

// 6. Create a new directory
if (!fs.existsSync('myfolder')) {
    fs.mkdirSync('myfolder');
    console.log('Directory created.');
}

// 7. Move file into the folder
fs.renameSync('renamed.txt', 'myfolder/renamed.txt');
console.log('File moved into "myfolder".');

// 8. Read contents of the directory
const files = fs.readdirSync('myfolder');
console.log('Contents of "myfolder":', files);

// 9. Delete the file
fs.unlinkSync('myfolder/renamed.txt');
console.log('File deleted from "myfolder".');
