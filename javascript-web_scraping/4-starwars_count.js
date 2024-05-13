#!/usr/bin/node
// Import the request module
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Function to make a GET request and print the count of movies featuring Wedge Antilles
request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode === 200 && body && body.results) {
    const wedgeId = '18';
    let count = 0;

    // Loop through each film in the response
    body.results.forEach(film => {
      // Check if Wedge Antilles (character ID 18) is in the characters list of the film
      if (film.characters.some(url => url.includes(`/people/${wedgeId}/`))) {
        count++;
      }
    });

    // Print the count of films featuring Wedge Antilles
    console.log(count);
  } else {
    console.log('Failed to retrieve data');
  }
});
