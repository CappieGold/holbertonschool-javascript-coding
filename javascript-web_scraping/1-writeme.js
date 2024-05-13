#!/usr/bin/node

const fs = require('fs');
const content = process.argv[3];
const fileName = process.argv[2];

fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err);
  }
});
