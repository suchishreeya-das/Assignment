const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Route to serve HTML manually (not using static)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for GET /gethello
app.get('/gethello', (req, res) => {
    res.send("Hello NodeJS!!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

