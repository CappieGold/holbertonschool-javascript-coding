# JavaScript - Web scraping

## Learning Objectives
At the end of this project, you are expected to be able to `explain to anyone`, without the help of Google:
- Why JavaScript programming is amazing
- How to manipulate JSON data
- How to use `request` and fetch API
- How to read and write a file using `fs` module

### 1. Why JavaScript Programming is Amazing
JavaScript is an incredibly popular language due to its versatility and the broad ecosystem surrounding it. Here are a few reasons why it stands out:
- `Versatility`: JavaScript can be used for both client-side and server-side programming thanks to environments like Node.js. This means you can build a complete application from front to back using just one language.
- `Asynchronous Programming`: With features like promises and async/await, JavaScript handles asynchronous operations elegantly, making it ideal for tasks that involve IO operations or any operations that require waiting for events.
- `Community and Ecosystem`: JavaScript has a massive community of developers and a vast array of libraries and frameworks, which makes it easier to implement complex applications with less effort.
- `Universal Support`: Every modern web browser supports JavaScript, making it the go-to language for interactive web pages.

### 2. How to Manipulate JSON Data
JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy to read and write for humans, and easy to parse and generate for machines. Here’s how you can manipulate JSON data in JavaScript:
```bash
// Sample JSON data
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Parse JSON string to JavaScript object
const obj = JSON.parse(jsonData);

// Modify the object
obj.age = 31;

// Convert the JavaScript object back to a JSON string
const updatedJsonData = JSON.stringify(obj);

console.log(updatedJsonData); // {"name":"John","age":31,"city":"New York"}
```

### 3. How to Use Request and Fetch API
- `Request API` has been deprecated, so it’s generally recommended to use the Fetch API now, which works both in the browser and in Node.js (with polyfills).

#### Using Fetch API:
```bash
fetch('https://api.example.com/data', {
  method: 'GET', // or 'POST'
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json()) // Parsing the JSON data
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### 4. How to Read and Write a File Using FS Module
The `fs` module in Node.js provides functionality to interact with the file system. Here's how to read and write files:

#### Reading a file:
```bash
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

#### Writing to a file:
```bash
const fs = require('fs');
const content = 'Some content!';

fs.writeFile('example.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully!');
});
```
