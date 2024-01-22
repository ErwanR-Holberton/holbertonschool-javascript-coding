#!/usr/bin/node
// read a file and log its content
const fs = require('fs');

const fileName = process.argv[2];
const strToWrite = process.argv[3];

fs.writeFile(fileName, strToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});
