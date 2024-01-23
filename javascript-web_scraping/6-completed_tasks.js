#!/usr/bin/node
// count result of the request
const request = require('request');

const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    let completedByUser = {};
    for (const task in body) {
      if (body[task].completed === true) {
        if (!(body[task]['userId'] in completedByUser)) {
            completedByUser[body[task]['userId']] = 1;
        } else {
            completedByUser[body[task]['userId']] += 1;
        }
      }
    }
    console.log(completedByUser);
  } else {
    console.error(error, 'hello');
  }
});
