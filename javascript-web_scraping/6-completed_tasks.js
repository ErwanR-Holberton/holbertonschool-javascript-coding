#!/usr/bin/node
// count result of the request
const request = require('request');

const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    const completedByUser = {};
    for (const task in body) {
      if (body[task].completed === true) {
        if (!(body[task].userId in completedByUser)) {
          completedByUser[body[task].userId] = 1;
        } else {
          completedByUser[body[task].userId] += 1;
        }
      }
    }
    let string2 = JSON.stringify(completedByUser);
    string2 = string2.replace(/,(\s*)/g, ',\n$1  ');
    string2 = string2.substring(1, string2.length - 1);
    string2 = "{ " + string2 + " }"
    console.log(string2);
  } else {
    console.error(error, 'hello');
  }
});
