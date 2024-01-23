#!/usr/bin/node
// request data on actor and count number of films
const request = require('request');

const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const filmsWithWedge = body.results.filter((film) =>
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${18}/`)
    );
    console.log(filmsWithWedge.length);
  }
});
