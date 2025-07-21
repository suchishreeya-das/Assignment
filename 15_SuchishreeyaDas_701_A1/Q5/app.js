const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

// Function to extract a zip file
function extractZip(zipFilePath, extractToPath) {
    fs.createReadStream(zipFilePath)
        .pipe(unzipper.Extract({ path: extractToPath }))
        .on('close', () => {
            console.log(`Extraction complete to: ${extractToPath}`);
        })
        .on('error', (err) => {
            console.error(`Extraction failed: ${err}`);
        });
}

// Example usage
const zipPath = path.join(__dirname, 'archiveNew.zip');       // Replace with your .zip file
const outputPath = path.join(__dirname, 'archiveNewExtracted'); // Folder to extract into

extractZip(zipPath, outputPath);
