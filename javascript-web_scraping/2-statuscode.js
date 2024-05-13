#!/usr/bin/node

const request = require('request');

// Retrieve the URL from the command line arguments
const url = process.argv[2];

if (!url) {
  console.log('Please provide a URL as an argument');
  process.exit(1);
}

request(url, { method: 'GET' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
