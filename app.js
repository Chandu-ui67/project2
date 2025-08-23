const express = require('express');


// Import necessary modules
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Project 2 App!');
});

// API to fetch data
app.get('/api/data', (req, res) => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    res.json(data);
});

// API to add new data
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    if (!newItem || !newItem.name) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    newItem.id = Date.now();
    res.status(201).json(newItem);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




