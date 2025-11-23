"use strict";
const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
    if (req.url === '/myname') {
        res.statusCode = 200; // HTTP status 200 (OK)
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Your Name</h1>'); // Replace 'Your Name' with your actual name
    } else {
        res.statusCode = 404; // HTTP status 404 (Not Found)
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Sorry, not found.</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
