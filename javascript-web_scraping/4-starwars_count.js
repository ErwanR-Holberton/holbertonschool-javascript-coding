#!/usr/bin/node
// request data on actor and count number of films
const request = require('request');

const url = 'https://swapi-api.hbtn.io/api/people/18';

request(url, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    console.log(body.films.length);
  } else {
    console.error(error, 'hello');
  }
});
