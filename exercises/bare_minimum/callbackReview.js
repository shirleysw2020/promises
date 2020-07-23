/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      callback(err, null);
      // done('fs.readFile failed : (/n', err);
    } else {
      let split = content.split('\n');
      callback(null, split[0]);
      // callback('fs.readFile successfully completed :)\n', content);
    }
  });
};
// Retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  request(url, (err, resp) => {
    if (err) {
      callback(err);
    } else {
      callback(err, resp.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
