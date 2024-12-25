// script.js

console.log('Xiaoshubao LN Reader Plugin Loaded');

// Fetch the novel data from your GitHub repository
fetch('https://raw.githubusercontent.com/Tenthousandworld/xiaoshubao-ln-reader/main/novels.json')
  .then(response => response.json())
  .then(novels => {
    // Log the fetched novels to check if it's working
    console.log('Novels:', novels);

    // Process the novel data (example: display title and author)
    novels.forEach(novel => {
      // Assuming you have some way to display these, like adding them to a list or grid
      console.log(`Title: ${novel.title}`);
      console.log(`Author: ${novel.author}`);
      console.log(`Status: ${novel.status}`);
    });
  })
  .catch(error => {
    console.error('Error loading novel data:', error);
  });
