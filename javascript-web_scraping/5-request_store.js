#!/usr/bin/node
// write response in file
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    fs.writeFile(fileName, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else {
    console.error(error, 'hello');
  }
});
