#!/usr/bin/node
// Import necessary modules
const request = require('request');
const fs = require('fs');

// Retrieve URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Function to get webpage content and store it
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Save the content to the specified file
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write to file:', err);
    } else {
      console.log('Content saved to', filePath);
    }
  });
});
