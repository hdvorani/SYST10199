"use strict"

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, 'public', filePath); // the path would include public directory
  console.log(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Page Not Found</h1><p><a href="/">Go to homepage</a></p>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  })
});

const hostname = 'localhost'
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
