#!/usr/bin/node
// request data on actor and count number of films
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film in films) {
        for (const character in films[film]['characters']) {
            if (films[film]['characters'][character].includes("18")) {
                count += 1;
            }
        }
    }
    console.log(count)
  }
});
