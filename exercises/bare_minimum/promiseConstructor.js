/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
// we can use promise promisify when the node fn conform to node.js convention of accepting a cb as last arg and calling the cb with err as 1st arg and success value as 2nd arg.
// Promise.promisifyAll(readFile)

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // make a promise
  return new Promise((resolve, reject) => {
    // read file
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) return reject(err);
      let split = content.split('\n');
      resolve(split[0]);
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, resp) => {
      if (err) return reject(err);
      resolve(resp.statusCode);
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
