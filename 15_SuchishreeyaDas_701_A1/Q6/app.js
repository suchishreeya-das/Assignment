const fs = require('fs');
const path = require('path');

// Manual Promisify of fs.unlink
function unlinkFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("File deleted");
            }
        });
    });
}

// Path of file to delete
const fileToDelete = path.join(__dirname, 'sample.txt');

// Call the function
unlinkFile(fileToDelete)
    .then(msg => console.log(msg))
    .catch(err => console.error('Error:', err.message));
