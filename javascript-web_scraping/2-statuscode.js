#!/usr/bin/node
// send request and get status
const fs = require('fs');
const request = require('request');

const url = process.argv[2];

request(url, (error, response) => {
  console.log(`Code: ${response.statusCode}`);
});
