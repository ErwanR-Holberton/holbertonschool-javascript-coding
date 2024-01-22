#!/usr/bin/node
// count result of the request
const request = require('request');

const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    let count = 0;
    for (const task in body) {
      if (body[task].completed === true) {
        count += 1;
      }
    }
    console.log(count);
  } else {
    console.error(error, 'hello');
  }
});
