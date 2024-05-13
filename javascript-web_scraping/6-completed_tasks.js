#!/usr/bin/node
// Import necessary modules
const request = require('request');

// Retrieve the API URL from the command line arguments
const apiUrl = process.argv[2];

// Function to fetch data and compute the number of completed tasks by user
request(apiUrl, { json: true }, (error, response, todos) => {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  // Object to hold the count of completed tasks per user
  const completedTasks = {};

  // Process each todo item from the API response
  todos.forEach(todo => {
    if (todo.completed) {
      // If the task is completed, increment the count for the user
      if (completedTasks[todo.userId]) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  });

  // Print the count of completed tasks for users with at least one completed task
  console.log(completedTasks);
});
