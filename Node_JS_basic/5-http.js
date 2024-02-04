const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      countStudents(path)
        .then((result) => {
          res.end(`This is the list of our students\n${result}`);
        })
        .catch((error) => {
          res.end(error.message);
        });
    }
  }
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
