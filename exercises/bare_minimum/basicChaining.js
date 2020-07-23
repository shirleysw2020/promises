/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  var readUsername = function(readFilePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(readFilePath, 'utf8',(err, userName) => {
        if (err) reject(err)
        let lines = userName.split('\n');
        resolve(lines[0])
    });
  }
  // the next .then should use fs.writeFile, i would need a function on its own and call it inside .then
  var writeToFile = function(writeFilePath) {

  };
  // then sends a request to the GitHub API for the user's profile
  // using request(userProfileUrl, (err, resp)...)
  var sendRequest = function() {
    ;
  }

  readUsername(readFilePath);
  .then(sendRequest)
  .then(writeToFile)
  ,catch();
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
