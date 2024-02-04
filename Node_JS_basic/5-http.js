const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      countStudents(path)
        .then((result) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`This is the list of our students\n${result}`);
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`Error: ${error.message}\n`);
        });
    }
  }
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
