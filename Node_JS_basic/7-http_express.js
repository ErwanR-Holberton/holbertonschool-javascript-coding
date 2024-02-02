const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (req, response) => {
  countStudents('./database.csv')
    .then((result) => {
      response.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      response.send(error.message);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
