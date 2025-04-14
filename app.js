const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module

const app = express();
const port = 3001; // Change the port number

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle code submission and generate feedback
app.post('/submit-code', (req, res) => {
    const code = req.body.code;
    // Placeholder logic to generate feedback
    const feedback = generateFeedback(code);
    res.json({ feedback });
});

// Function to generate feedback based on the code
function generateFeedback(code) {
    // Your feedback generation logic here
    // This is just a placeholder
    return "Your code looks good!";
}

// Route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
