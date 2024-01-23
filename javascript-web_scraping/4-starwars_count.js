#!/usr/bin/node
// request data on actor and count number of films
const request = require('request');

const url = 'https://swapi-api.hbtn.io/api/people/18';

request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body.films.length);
  }
});
