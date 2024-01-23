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
    let count = 0;
    process.stdout.write("{")
    for (const key in completedByUser) {
        if (count != 0) {
            process.stdout.write(",\n")
            process.stdout.write(" ")
        } else {
        }
        count += 1;
        const value = completedByUser[key];
        process.stdout.write(` \u001b[32m'${key}'\u001b[0m: \u001b[33m${value}\u001b[0m`);
      }
    console.log(" }")
  } else {
    console.error(error, 'hello');
  }
});
