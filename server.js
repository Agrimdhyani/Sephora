const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// This tells the server to serve your HTML, CSS, and Images automatically
app.use(express.static(__dirname));

// Sample Data (In a real app, this comes from a Database)
const books = [
    { id: 1, title: "A Knight of The Seven Kingdoms ", price: 17.00, author: "F. Scott Fitzgerald" },
    { id: 2, title: "FRANKENSTEIN", price: 19.50, author: "MARY SHELLEY" },
    { id: 3, title: "THE BOOK OF DEMON", price: 12.00, author: "Nanditha Krishna" }
];

// Route to get the list of books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Route to serve your main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
});
app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
});