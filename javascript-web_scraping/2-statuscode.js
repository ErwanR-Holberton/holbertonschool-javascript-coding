#!/usr/bin/node
// send request and get status
const request = require('request');

const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error(`Error making request: ${error.message}`);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
