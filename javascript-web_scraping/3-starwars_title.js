#!/usr/bin/node
// Import the request module
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the URL for the Star Wars API
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Function to make a GET request and print the movie title
request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response && response.statusCode === 200) {
    console.log(body.title);
  } else {
    console.log('Failed to retrieve the movie title');
  }
});
