#!/usr/bin/node
// send request and get status
const request = require('request');

const number = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

request(url + number, { json: true }, (error, response, body) => {
  if (response && response.statusCode === 200) {
    console.log(body.title);
  } else {
    console.error(`Error'}`);
  }
});
