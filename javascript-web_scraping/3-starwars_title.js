#!/usr/bin/node
// send request to star wars api with a number and print the title
const request = require('request');

const number = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

request(url + number, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    console.log(body.title);
  } else {
    console.error(error);
  }
});
