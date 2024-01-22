#!/usr/bin/node
// read a file and log its content
const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`${err}`);
  } else {
    console.log(`${data}`);
  }
});
