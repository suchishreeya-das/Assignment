const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Function to zip a folder
function zipFolder(sourceFolderPath, outputZipPath) {
    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', {
        zlib: { level: 9 } 
    });

    output.on('close', () => {
        console.log(`Zipped ${archive.pointer()}`);
        console.log(`Output file created: ${outputZipPath}`);
    });

    archive.on('error', err => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(sourceFolderPath, false); 
    archive.finalize();
}

const sourceFolder = path.join(__dirname, 'myFolder');
const outputZip = path.join(__dirname, 'myFolder.zip');

zipFolder(sourceFolder, outputZip);
