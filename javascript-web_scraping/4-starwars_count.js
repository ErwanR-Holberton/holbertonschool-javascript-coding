#!/usr/bin/node
// request data on actor and count number of films
const request = require('request');

const url = 'https://swapi-api.hbtn.io/api/people/18';

request(url, (error, response, body) => {
  if (response && response.statusCode === 200) {
    const films = JSON.parse(body).films;
	console.log(films.length)
  } else {
    console.error(error, 'hello');
  }
});
