const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '')));

// Serve HTML files for the defined routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/projects', (req, res) => res.sendFile(path.join(__dirname, 'projects.html')));
app.get('/capstone', (req, res) => res.sendFile(path.join(__dirname, 'capstone.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
